const { Router } = require("express");

const { 
    getComments,
    addComment,
    updateComment,
    deleteComment
      } = require("../handlers/commentsHandlers");

const commentsRouter = Router()


commentsRouter.get("/:productId", getComments)            
              .post("/:productId", addComment)
              .put("/:productId/:commentId", updateComment)
              .delete("/:productId/:commentId", deleteComment)

module.exports= commentsRouter;
