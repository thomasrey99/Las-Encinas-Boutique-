const { Category } = require("../db");

const categories = [
  { name: "Todas" },
  { name: "Alfajores" },
  { name: "Chocolate en rama" },
  { name: "Bocaditos" },
  { name: "Chocolate en barra" },
  { name: "Volcáncito" },
  { name: "Marroc" },
  { name: "Huevos de pascua" },
  { name: "Oreo" },
  { name: "Brownie" },
];

const fetchCategories = async () => {
  try {
    for (const category of categories) {

      const existingCategory = await Category.findOne({
        where: { name: category.name },
      });

      if (!existingCategory) {
        await Category.create(category);
      }
    }

    console.log("Categorías creadas o verificadas con éxito.");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = fetchCategories;
