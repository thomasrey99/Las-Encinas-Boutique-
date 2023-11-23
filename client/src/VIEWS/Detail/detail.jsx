import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProductReviews from './reviews';
import { useGetFavProductQuery, useAddFavProductMutation, useRemoveFavProductMutation } from "../../libs/redux/services/favoritesApi";
import { useGetProductByIdQuery } from "../../libs/redux/services/productsApi";
import { addProductCart } from "../../libs/redux/features/CartSlice";
import { usePutCartMutation } from "../../libs/redux/services/CartApi";
import { Spin, Alert, Card, Col, Row, Rate, Button, Tabs } from "antd";
const { Meta } = Card;
const { Item } = Tabs;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./detail.module.css";
import Swal from "sweetalert2/dist/sweetalert2.js"

const Detail = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const productId = id;
  const user = useSelector((state) => state.user.userLog);
  const userId = user?.uid;
  const id_cart = useSelector((state) => state.user.userCartId);
  const cartData = useSelector((state) => state.cart);

  const { data: productDetail, isError, isLoading } = useGetProductByIdQuery(id);
  const { data: productFav, refetch } = useGetFavProductQuery({ userId, productId, });

  const [addFavProduct] = useAddFavProductMutation();
  const [removeFavProduct] = useRemoveFavProductMutation();
  const [mutate] = usePutCartMutation();

  const handlefavClick = async () => {
    if (productFav) {
      await removeFavProduct({ userId, productId });
    } else {
      await addFavProduct({ userId, productId });
    }
    refetch();
  };

  const handleProductCart = async (productDetail) => {
    if (user === null) {
      alert("Tienes que registrarte para agregar productos al carrito");
      navigate("/login");
    } else {
      dispatch(addProductCart(productDetail));
      await mutate({ dataUpdate: cartData, id_cart: id_cart });Swal.fire({
        position: "top-mid",
        icon: "success",
        title: `Agregado al carrito` ,
        showConfirmButton: false,
        timer: 1500
      });
      
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer); 
  }, []);


  return (
    <div className={styles.pageContainer}>
      <div className={styles.detailContainer}>
      {
        isLoading || loading
        ? (
          <Spin tip="Cargando" className={styles.loading}>
            <div className="content" />
          </Spin> ) 
        : productDetail !== undefined 
        ? (
          <div>
            <Card>
              <Row>
                <Col span={14} className={styles.span}>
                  <ArrowLeftOutlined
                    className={styles.back}
                    onClick={() => navigate(-1)}/>
                  <div className={styles.imageContainer}>
                    <img
                      alt={productDetail.name}
                      src={productDetail.image}
                      className={styles.image}/>
                  </div>
                </Col>
                <Col span={10}>
                  <div className={styles.productInfo}>
                    { !productFav ? (
                      <HeartOutlined
                        size="large"
                        className={styles.noLikedButton}
                        onClick={handlefavClick}
                      />
                    ) : (
                      <HeartFilled
                        size="large"
                        className={styles.likedButton}
                        onClick={handlefavClick}
                      />
                    )}
                    <div>
                      <h1>{productDetail.name}</h1>
                      <Rate disabled value={productDetail.rating} />
                    </div>
                    <h2 className={styles.price}>${productDetail.price}</h2>
                    <div>
                      <p className={styles.propsPorduct}>Categoría: {productDetail.category}</p>
                      <p className={styles.propsPorduct}>Tipo: {productDetail.type}</p>
                      <Meta
                        description={<p className={styles.propsPorduct}>id: {productDetail.id_product}</p>}
                      />
                    </div>
                    <div className={styles.imgMPContainer}>
                      <img src="https://res.cloudinary.com/dkgeccpz4/image/upload/v1700074726/mercadopago_goqpiu.png" 
                        alt="MercadoPago" className={styles.imgMP}/>
                    </div>

                    <div className={styles.productButtons}>
                      <Button
                        type="primary"
                        block
                        onClick={() => handleProductCart(productDetail)}
                      >
                        <ShoppingCartOutlined size="large" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col span={24}>
                  <Card>
                    <Tabs defaultActiveKey="1">
                      <Item tab="Descripción" key="1">
                        <div
                          style={{
                            maxHeight: "100vh",
                            overflow: "auto",
                            textAlign: "center",
                          }}>
                          <p>{productDetail.description}</p>
                        </div>
                      </Item>
                      <Item tab="Comentarios" key="2">
                        <ProductReviews user={user} productId={productId}/>
                      </Item>
                    </Tabs>
                  </Card>
                </Col>
              </Row>
            </Card>
          </div> ) 
        : (
          isError && (
            <Alert
              message="Error"
              description="Por favor, intente de nuevo más tarde."
              type="error"
              showIcon
              className={styles}
            />
          )
        )}
    </div>
    </div>
  );
};

export default Detail;
