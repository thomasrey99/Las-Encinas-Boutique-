const server = require("./src/app")
const { dataBase } = require('./src/db.js');
const fetchCategories = require("./src/utils/fetchCategories");
const fetchTypes = require("./src/utils/fetchTypes");
const PORT=3001


//!inicializando el servidor y sincronizando la base de datos

const startServer=async()=>{
  try {
<<<<<<< HEAD
    await dataBase.sync({ alter:true});
=======
    await dataBase.sync({ alter :true});
>>>>>>> develop
    await fetchCategories();
    await fetchTypes();
    server.listen(PORT, () => {
      console.log(`Server of las encinas boutique listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error.message);  
  }
}

startServer();