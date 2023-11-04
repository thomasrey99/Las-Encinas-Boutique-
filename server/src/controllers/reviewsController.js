const { Review } = require('../db');

//CONTROLER QUE TRAE REVIEWS DE UN PRODUCTO
const getReviewsController = async (productId) => {

  const review = await Review.findAll({ where: { id_product: productId } });
  if (review || review.length > 0) return review;
  else return [];
};

//CONTROLER QUE TRAE LA REVIEW DE UN PRODUCTO DE UN USUARIO
const getReviewByIdController = async (userId, productId) => {

  const review = await Review.findOne({ where: { uid: userId, id_product: productId } });
  if (review.length > 0) return review;
  else return [];
};

//CONTROLLER QUE CREA UNA NUEVA REVIEW
const postReviewController = async (userId, productId, rating, comment) => {
    const reviewData = {
        uid: userId,
        id_product: productId,
        rating: rating,
        comment: comment,
      };
    const newRevew = await Review.create(reviewData);
    if (newRevew) return newRevew;
    else return 'Hubo un problema al crear la review'
};

//CONTROLLER QUE EDITA UNA REVIEW
const updateReviewController = async (productId, userId, idReview, rating, comment) => {
    const reviewData = {
        rating: rating,
        comment: comment,
    };
    const update = await Review.update(reviewData, { where: { id_product: productId, uid: userId,  id_review: idReview  } });
    if (update) return await Review.findOne({ where: { uid: userId, id_product: productId, id_review: idReview } });
    else return 'Hubo un problema al actualizar';
};

//CONTROLLER QUE ELIMINA UNA REVIEW
const deleteReviewController = async (productId, userId, idReview,) => {
    console.log(idReview);
  const reviewDeleted = await Review.destroy({ where: { id_product: productId, uid: userId,  id_review: idReview } });
  if (reviewDeleted) return `Review Eliminado con éxito`
  else return 'Error al eliminar la review'
};

module.exports = {
    getReviewsController,
    getReviewByIdController,
    postReviewController,
    updateReviewController,
    deleteReviewController,
};
