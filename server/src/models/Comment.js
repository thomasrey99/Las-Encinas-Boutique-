const { DataTypes } = require('sequelize');


module.exports = (dataBase) => {

  dataBase.define('Comment', {
    id_comment: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    content: {
        type: Sequelize.TEXT
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: Product,
          key: 'id'
        }
      },
  },
  {
      freezeTableName: true,
      timestamps: false,
      createdAt:false,
      updatedAt:false
  });
};
