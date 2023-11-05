import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetFavProductQuery, useAddFavProductMutation, 
         useRemoveFavProductMutation } from '../../libs/redux/services/favoritesApi';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';
import { useGetAllReviewsQuery, useAddReviewMutation, useRemoveReviewMutation } from '../../libs/redux/services/reviewsApi';
import { Spin, Alert, Card, Col, Row, Rate, Button, Tabs, Modal, List, Skeleton, Avatar, Input } from 'antd';
const { Meta } = Card;
const { Item } = Tabs;
const { TabPane } = Tabs;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './detail.module.css';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Detail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const  productId  = id;
    const userId = 'a500';
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ isModalVisibleRemoveReview, setIsModalVisibleRemoveReview ] = useState(false);
    const [selectedReviewId, setSelectedReviewId] = useState(null);
    const { data: productDetail, isError, isLoading } = useGetProductByIdQuery(id);
    const { data: productFav, refetch } = useGetFavProductQuery({userId, productId});
    const [ addFavProduct ] = useAddFavProductMutation();
    const [ removeFavProduct ] = useRemoveFavProductMutation();
    const { data: reviews, refetch: getNewReviews } = useGetAllReviewsQuery(productId);
    const [ addReview ] = useAddReviewMutation();
    const [ removeReview ] = useRemoveReviewMutation();

    const handlefavClick = async () => {

        if (productFav) {
          await removeFavProduct({userId, productId});
        } else {
          await addFavProduct({userId, productId});
        }
        refetch(); 
    }

    const [newReview, setNewReview] = useState({ 
        comment: '',
        rating: 0
    });

    const cleanReview = () => {setNewReview({ comment: '', rating: 0 })}

    const handleAddReview = async (e) => {
        e.preventDefault();
        if (newReview.comment !== '') {
            try {
                await addReview({productId, userId, newReview});
                cleanReview();
            } catch (error) {
                console.log({ error: error.message, details: error.details });
                alert("Error al agregar review: " + error);
            }
            getNewReviews();
        }
        else ''
    };

    const handleRemoveReview = async (id_review) => {
    const idReview = id_review;
    await removeReview({productId, idReview});
    console.log(productId, idReview);
    setIsModalVisibleRemoveReview(false);
    getNewReviews();
    };

    const handleOk = () => navigate('/*')

    return(
        <div className={styles.detailContainer}>
            { isLoading ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin> 

                : productDetail !== undefined ?
                <div>
                        <Card>    
                            <Row>
                    
                                <Col span={15} className={styles.span}>
                                    <ArrowLeftOutlined className = {styles.back} onClick={()=>navigate(-1)}/>
                                    <img alt={productDetail.name} src={productDetail.image} className={styles.image} />
                                </Col>
                                <Col span={9}>
                                    <div className={styles.productInfo}>
                                        {!productFav ? <HeartOutlined size="large" className={styles.noLikedButton} 
                                        onClick={handlefavClick}/>
                                        : <HeartFilled size="large" className={styles.likedButton} 
                                        onClick={handlefavClick} />}
                                        <h1>{productDetail.name}</h1> 
                                        <h2>${productDetail.price}</h2> 
                                        <Rate disabled value={productDetail.raiting}/> 
                                        <p>{productDetail.category}</p> 
                                        <Meta description={<p>id: {productDetail.id_product}</p>}/> <br /> 
                                        <div className={styles.productButtons}>
                                            <Button type="default" block><ShoppingCartOutlined size="large"/></Button> 
                                            <Button type="primary" block className={styles.buttonComprar} 
                                            onClick={()=> setIsModalVisible(true)}>Comprar</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <Card >
                                    <Tabs defaultActiveKey="1">
                                            <TabPane tab="Descripción" key="1">
                                                <div style={{ maxHeight: '50%', overflow: 'auto', textAlign: 'center' }}>
                                                    <p>{productDetail.description}</p>
                                                </div>
                                            </TabPane>
                                            <TabPane tab="Comentarios" key="2">
                                                <div style={{ maxHeight: '50%', overflow: 'auto', textAlign: 'center' }}>
                                                <Rate onChange={(value) => setNewReview({...newReview, rating: value})} 
                                                value={newReview.rating} />
                                                <Input.TextArea
                                                    rows={4}
                                                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                                                    value={newReview.comment}
                                                    />
                                                    <Button type="primary" onClick={handleAddReview}>
                                                    Agregar comentario
                                                    </Button>

                                                <List
                                                className="comment-list"
                                                loading={false}
                                                itemLayout="horizontal"
                                                loadMore=''
                                                dataSource={reviews}
                                                renderItem={(item) => (
                                                    <List.Item
                                                        actions={[
                                                            <a key="comment-reply">Responder</a>,
                                                            <a key="comment-edit" >Editar</a>,
                                                            <a key="comment-delete" 
                                                            onClick={()=> {
                                                                setIsModalVisibleRemoveReview(true)
                                                                setSelectedReviewId(item.id_review)
                                                            }}>Eliminar</a>
                                                        ]}
                                                    >
                                                        <Modal title="Confirmar compra" visible={isModalVisibleRemoveReview} 
                                                        onOk={()=>handleRemoveReview(selectedReviewId)} 
                                                        onCancel={()=>setIsModalVisibleRemoveReview(false)}>
                                                        <p>¿Estás seguro de que quieres eliminar este comentario?</p>
                                                        </Modal>
                                                    <Skeleton avatar title={false} loading={item.loading} active>
                                                        <List.Item.Meta
                                                        avatar={<Avatar src={item.avatar} />}
                                                        title={<h4>{item.id}</h4>}
                                                        description={item.comment}
                                                        />
                                                        <p><Rate disabled value={item.rating} style={{ fontSize: '15px', 
                                                        marginRight: '15px'}}/></p>
                                                        <p>{item.date}</p>
                                                    </Skeleton>
                                                    </List.Item>
                                                )}
                                                />
                                                </div>
                                            </TabPane>
                                        </Tabs>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                            <Modal title="Confirmar compra" visible={isModalVisible} onOk={handleOk} 
                            onCancel={()=> setIsModalVisible(false)}>
                                <p>¿Estás seguro de que quieres comprar este producto?</p>
                            </Modal>
                        </div>
                        : isError &&
                        <Alert message="Error" description="Por favor, intente de nuevo más tarde." type="error" 
                        showIcon className={styles}/>
            }
        </div>
    );
};

export default Detail;