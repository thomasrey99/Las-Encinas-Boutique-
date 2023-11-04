import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetFavProductQuery, useAddFavProductMutation, useRemoveFavProductMutation } from '../../libs/redux/services/favoritesApi';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';
import { Spin, Alert, Card, Col, Row, Rate, Button, Tabs, Modal, List, Skeleton, Avatar, Input } from 'antd';
const { Meta } = Card;
const { Item } = Tabs;
const { TabPane } = Tabs;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './detail.module.css';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Detail = () => {

    const [ comments, setComments ] = useState([
        {
          author: {
            name: 'Pepito',
            avatar: 'https://img.freepik.com/vector-premium/dibujos-animados-muscular-barra-chocolate-vector-mascota-dibujos-animados_193274-15607.jpg',
          },
          content: 'Me gustó bastante el producto',
          date: '3/11/2023',
          loading: false, 
          raiting: 4
        },
        {
            author: {
              name: 'Juanito',
              avatar: 'https://charatoon.com/photo/2367.png',
            },
            content: 'Está buenísimo man',
            date: '1/1/2022',
            loading: false, 
            raiting: 5
          },
      ])

    const [newComment, setNewComment] = useState({
        author: {
            name: 'Mateo',
            avatar: 'https://img.freepik.com/vector-premium/cacao-come-mascota-chocolate-vector-dibujos-animados_193274-12227.jpg',
          },
          content: '',
          date: new Date().toLocaleDateString(),
          loading: false, 
          raiting: 0
    });

    const handleAddComment = () => {
        setComments([...comments, newComment]);
        setNewComment({
          ...newComment,
          content: '',
          raiting: 0
        });
    };
    const navigate = useNavigate();
    const { id } = useParams();
    const  productId  = id;
    const userId = 'a500';
    const [ addFavProduct ] = useAddFavProductMutation();
    const [ removeFavProduct ] = useRemoveFavProductMutation();
    const { data: productDetail, isError, isLoading } = useGetProductByIdQuery(id);
    const { data: productFav, refetch } = useGetFavProductQuery({userId, productId});
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    const handlefavClick = async () => {

        if (productFav) {
          await removeFavProduct({userId, productId});
        } else {
          await addFavProduct({userId, productId});
        }
        refetch(); 
      }

    const showModal = () => setIsModalVisible(true);

    const handleOk = () => navigate('/shopping')

    const handleCancel = () => setIsModalVisible(false);

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
                                        {!productFav ? <HeartOutlined size="large" className={styles.noLikedButton} onClick={handlefavClick}/>
                                        : <HeartFilled size="large" className={styles.likedButton} onClick={handlefavClick} />}
                                        <h1>{productDetail.name}</h1> 
                                        <h2>${productDetail.price}</h2> 
                                        <Rate disabled value={productDetail.raiting}/> 
                                        <p>{productDetail.category}</p> 
                                        <Meta description={<p>id: {productDetail.id_product}</p>}/> <br /> 
                                        <div className={styles.productButtons}>
                                            <Button type="default" block><ShoppingCartOutlined size="large"/></Button> 
                                            <Button type="primary" block className={styles.buttonComprar} onClick={showModal}>Comprar</Button>
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
                                                <Rate onChange={(value) => setNewComment({...newComment, raiting: value})} 
                                                value={newComment.raiting} />
                                                <Input.TextArea
                                                    rows={4}
                                                    onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                                                    value={newComment.content}
                                                    />
                                                    <Button type="primary" onClick={handleAddComment}>
                                                    Agregar comentario
                                                    </Button>
                                                <List
                                                className="comment-list"
                                                loading={false}
                                                itemLayout="horizontal"
                                                loadMore=''
                                                dataSource={comments}
                                                renderItem={(item) => (
                                                    <List.Item
                                                        actions={[
                                                            <a key="comment-reply">Responder</a>,
                                                            <a key="comment-edit">Editar</a>,
                                                            <a key="comment-delete">Eliminar</a>
                                                        ]}
                                                    >
                                                    <Skeleton avatar title={false} loading={item.loading} active>
                                                        <List.Item.Meta
                                                        avatar={<Avatar src={item.author.avatar} />}
                                                        title={<h4>{item.author.name}</h4>}
                                                        description={item.content}
                                                        />
                                                        <p><Rate disabled value={item.raiting} style={{ fontSize: '15px', marginRight: '15px'}}/></p>
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
                            <Modal title="Confirmar compra" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>¿Estás seguro de que quieres comprar este producto?</p>
                            </Modal>
                        </div>
                        : isError &&
                        <Alert message="Error" description="Por favor, intente de nuevo más tarde." type="error" showIcon className={styles}/>
            }
        </div>
    );
};

export default Detail;