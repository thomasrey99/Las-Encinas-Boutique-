const { 
    getCommentsController,
    addCommentController,
    updateCommentController,
    deleteCommentController
  } = require("../controllers/commentsControllers");


// Handler GET /comments
const getComments = async (req, res) => {
    const { productId } = req.params;

    try {
        const comments = await getCommentsController(productId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Handler POST /comments
const addComment = async (req, res) => {
    const { userId, content } = req.body;
    const { productId } = req.params;

    try {
        const comment = await addCommentController(userId, productId, content);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Handler PUT /comments
const updateComment = async (req, res) => {
    const { userId, content } = req.body;
    const { productId, commentId } = req.params;

    try {
        const comment = await updateCommentController(userId, productId, commentId, content);
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Handler DELETE /comments
const deleteComment = async (req, res) => {
    const { userId } = req.body;
    const { productId, commentId } = req.params;

    try {
        const comment = await deleteCommentController(userId, productId, commentId);
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    getComments,
    addComment,
    updateComment,
    deleteComment
}