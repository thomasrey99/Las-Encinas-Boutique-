const { 
    getReviewsController,
    getReviewByIdController,
    postReviewController,
    updateReviewController,
    deleteReviewController,
  } = require("../controllers/reviewsController");


//-----------------------------------
// Handler GET /reviews
const getProductReviews = async (req, res) => {
const { productId } = req.params;

try {
    const reviews = await getReviewsController(productId);
    res.status(201).json(reviews)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

// Handler GET /reviews/:productId?idReview=''
const getProductReviewsById = async (req, res) => {
const { productId } = req.params;
const { idReview } = req.query;
console.log(idReview);
try {
    const review = await getReviewByIdController(productId, idReview);
    res.status(200).json(review);
} catch (error) {
    res.status(400).json({ error: error.message });
}
}


//Handler que maneja la petición POST a /reviews
const postProductReview = async(req, res) =>{
    const { productId } = req.params;
    const { userId } = req.query;
    const { rating, comment } = req.body;

try {
    const review = await postReviewController(userId, productId, rating, comment)
    res.status(201).json(review)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

//Handler que maneja la petición PUT a /reviews
const editProductReview = async(req, res) =>{
    const { productId } = req.params;
    const { userId, idReview } = req.query;
    const { rating, comment } = req.body;

try {
    const review = await updateReviewController(productId, userId, idReview, rating, comment)
    res.status(201).json(review)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

//Handler que maneja la petición DELETE a /review
const removeproductReview = async(req, res) =>{
    const { productId } = req.params;
    const { userId, idReview } = req.query;

try {
    const review = await deleteReviewController(productId, userId, idReview)
    res.status(200).json(review)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

module.exports = {
getProductReviews,
getProductReviewsById,
postProductReview,
editProductReview,
removeproductReview
}