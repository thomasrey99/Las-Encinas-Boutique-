const { Op } = require("sequelize");
const {Product, User}=require("../db")


// Controller para traer comentarios de un producto
const getCommentsController = async (productId) => {
    const product = await Product.findByPk(productId, {
        include: [{
            model: Comment,
            as: 'comments',
            include: [{
                model: User,
                as: 'user',
                attributes: ['id_user', 'name']  
            }]
        }]
    });

    if (product) {
        return product.comments;
    }
}

// Controller para Agregar comentario
const addCommentController = async (userId, productId, content) => {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (user && product) {
        const comment = await Comment.create({ 
            content: content,
            userId: userId,
            productId: productId
        });
        
        return { message: 'Comentario agregado', comment: comment };
    }
}

// Controller para Actualizar comentario
const updateCommentController = async (userId, productId, commentId, content) => {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);
    
    if(user && product){
      let comment=await Comment.findOne({where:{id_comment:commentId}});
      if(comment){
          comment.content=content;
          await comment.save();
          return { message: 'Comentario actualizado', comment: comment };
      }
      else{
          throw new Error('Comentario no encontrado');
      }
      
  }
}

// Controller para Eliminar comentario
const deleteCommentController = async (userId, productId, commentId) => {
  let comment=await Comment.findOne({where:{id_comment:commentId}});
  if(comment){
      await comment.destroy();
      return { message: 'Comentario eliminado' };
  }
  else{
      throw new Error('Comentario no encontrado');
  }
}

module.exports = {
    getCommentsController,
    addCommentController,
    updateCommentController,
    deleteCommentController
};
