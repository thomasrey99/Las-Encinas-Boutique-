import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserReview from "./userReview";
import UserImage from './userImage';
import { useGetProductByIdQuery } from "../../libs/redux/services/productsApi";
import { useGetAllReviewsQuery, useAddReviewMutation, useEditReviewMutation, useRemoveReviewMutation,} from "../../libs/redux/services/reviewsApi";
import { useGetAllRequestQuery } from "../../libs/redux/services/requestApi";
import { Spin, Alert, Rate, Button, Modal, List, Skeleton, Avatar, Input, Tooltip } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./detail.module.css";
import Swal from "sweetalert2/dist/sweetalert2.js"


const ProductReviews = ({ productId, user }) => {

  const { data: requests } = useGetAllRequestQuery();
  const { id } = useParams();
  const userId = user?.uid;

  const [isModalVisibleRemoveReview, setIsModalVisibleRemoveReview] = useState(false);
  const [isModalVisibleEditReview, setIsModalVisibleEditReview] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [updateReview, setUpdatedReview] = useState({ comment: "", rating: 0 });

  const { data: reviews, refetch: getNewReviews, isLoading, isError } = useGetAllReviewsQuery(productId);
  const { refetch: refreshProductDetail } = useGetProductByIdQuery(id);

  const [addReview] = useAddReviewMutation();
  const [editReview] = useEditReviewMutation();
  const [removeReview] = useRemoveReviewMutation();

  const [newReview, setNewReview] = useState({ comment: "", rating: 0 });

  const cleanReview = () => {
    setNewReview({ comment: "", rating: 0 });
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    if (newReview.comment !== "") {
      try {
        await addReview({ productId, userId, newReview });
        cleanReview();
      } catch (error) {
        console.log({ error: error.message, details: error.details });
        alert("Error al agregar review: " + error);
      }
      getNewReviews();
      refreshProductDetail();
    }
  };

  const handleRemoveReview = async (selectedReviewId) => {
    const idReview = selectedReviewId;
    await removeReview({ productId, idReview });

    setIsModalVisibleRemoveReview(false);
    getNewReviews();
    refreshProductDetail();
    setSelectedReviewId(null);Swal.fire({
      position: "top-mid",
      icon: "success",
      title: `Comentario eliminado exitosamente` ,
      showConfirmButton: false,
      timer: 9500,
    });
    
  };

  const handleEditReview = async (selectedReviewId, updateReview) => {
    const idReview = selectedReviewId;
    await editReview({ productId, idReview, updateReview });

    setIsModalVisibleEditReview(false);
    getNewReviews();
    refreshProductDetail();
    setSelectedReviewId(null);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer); 
    }, []);

  // ¿El usuario ya compró el producto?
  // const userRequests = requests?.filter(request => request.uid === userId);
  // const productPurchased = userRequests?.some(request => 
  //   request.products?.some(product => product.id === productId)
  // );
  const productPurchased = true;

  if (isLoading || loading ) {
    return <Spin><div className="content"/></Spin>;
}

if (isError || !user) {
    return <Alert message="Error" description="" type="error" showIcon/>;
}

  return (
    <div
      style={{
        maxHeight: "100vh",
        overflow: "auto",
        textAlign: "center",
        paddingLeft: "5px",
        paddingRight: "5px"
      }}>
      <div>
          <div className={styles.contentAddReview}>
            <Rate
              disabled={!productPurchased}
              onChange={(value) =>
                  setNewReview({ ...newReview, rating: value })
              }
              value={newReview.rating}
              className={styles.addRating}/>
            <div className={styles.addReview}>
              <Tooltip title={!productPurchased ?'Por favor, compra el producto para poder comentar😊' 
                :''}>
                <Input.TextArea
                  autoSize
                  rows={4}
                  onChange={(e) =>
                      setNewReview({
                      ...newReview,
                      comment: e.target.value,
                  })}
                  disabled={!productPurchased}
                  placeholder="Agregar comentario..."
                  maxLength="250"
                  value={newReview.comment}
                  className={styles.inputToComment}/> 
              </Tooltip>
            </div>
            <div className={styles.buttonsContainer}>
                {
                  newReview.comment.trim().length > 0 
                  ?
                    <div>
                      <Button
                        type="default"
                        onClick={cleanReview}
                        className={styles.buttonAddComment}
                        disabled={!productPurchased}>
                          <CloseCircleOutlined />
                      </Button>
                      <Button
                        type="primary"
                        onClick={handleAddReview}
                        className={styles.buttonAddComment}
                        disabled={!productPurchased}>
                          <CheckCircleOutlined />
                      </Button>
                    </div>
                  :<div ></div>
                }
              </div>
          </div>
      </div> 
      {reviews && reviews.length > 0 
      ? (
        <div>
          <h2 className={styles.Comments}>{`${reviews.length} comentarios`}</h2>
            <List
              className="comment-list"
              loading={false}
              itemLayout="horizontal"
              loadMore=""
              dataSource={reviews}
              renderItem={(item) => (
                <List.Item
                    actions={[
                      userId === item.uid 
                      ? (
                        <div className={styles.iconsRyE}>
                          <a
                            key="comment-edit"
                            onClick={() => {
                                setIsModalVisibleEditReview(true);
                                setSelectedReviewId(item.id_review);
                                setUpdatedReview({
                                  ...updateReview,
                                  comment: item.comment,
                                  rating: item.rating,
                                });
                            }}>
                              <EditOutlined />
                          </a>
                        </div> ) 
                      : (
                        <div className={styles.iconsRyE}></div> ),
                          userId === item.uid || user.is_Admin 
                          ? (
                              <div className={styles.iconsRyE}>
                                <a
                                  key="comment-delete"
                                  onClick={() => {
                                    setIsModalVisibleRemoveReview(true);
                                    setSelectedReviewId(item.id_review);
                                  }}>
                                    <DeleteOutlined
                                  style={{ color: "#65451f" }}/>
                                </a>
                              </div>) 
                          : (
                            <div className={styles.iconsRyE}></div> ),
                    ]}
                >
                  {/* Eliminar comentario */}
                  <Modal
                    title="Eliminar comentario"
                    visible={isModalVisibleRemoveReview}
                    onOk={() =>
                    handleRemoveReview(selectedReviewId)
                    }
                    onCancel={() =>
                    setIsModalVisibleRemoveReview(false)
                    }>
                      <p>
                        ¿Estás seguro de que quieres eliminar este comentario?
                      </p>
                  </Modal>
                  {/* Editar comentario */}
                  <Modal
                    title="Editar comentario"
                    visible={isModalVisibleEditReview}
                    onOk={() =>
                    handleEditReview(
                        selectedReviewId,
                        updateReview)
                    }
                    onCancel={() => {
                    setIsModalVisibleEditReview(false);
                    setUpdatedReview({
                        comment: "",
                        rating: 0,
                    });
                    }}>
                      <Rate
                        onChange={(value) =>
                        setUpdatedReview({
                            ...updateReview,
                            rating: value,
                        })}
                        value={updateReview.rating}/>
                      <Input
                        value={updateReview.comment}
                        onChange={(e) =>
                        setUpdatedReview({
                        ...updateReview,
                        comment: e.target.value,
                        })}/>
                  </Modal>
                  <Skeleton
                    avatar
                    title={false}
                    loading={item.loading}
                    active>
                      <List.Item.Meta
                        avatar={<Avatar src={<UserImage id={item.uid}/>} />}
                        title={
                          <div className={styles.NameAndRate}>
                            <div>
                              <UserReview id={item.uid} />
                            </div>
                            <div>
                              <Rate
                              disabled
                              value={item.rating}
                              style={{ fontSize: "15px" }}/>
                            </div>
                          </div>
                        }
                        description={
                          <div
                            className={styles.descriptionComment}>
                              {item.comment}
                          </div>
                        }
                      />
                        <p className={styles.date}>{item.date}</p>
                  </Skeleton>
                </List.Item>
              )}
            />
        </div> ) 
      : productPurchased 
      ? (
        <Alert
          message="Sin comentarios"
          type="info"
          showIcon
          description="Sé el primero en dar tu opinión"/> )
      :                           
        <Alert
          message="Sin comentarios"
          type="info"
          showIcon
          description='¿Quieres ser el primero en comentar? ¡Compra nuestro producto y comparte tu opinión!'
        />
      }
  </div>
);

};

export default ProductReviews;
