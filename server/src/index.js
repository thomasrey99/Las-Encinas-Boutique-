const server = require("./app.js")
const { dataBase } = require('./db.js');
const fetchCategories = require("./utils/fetchCategories.js");
const fetchTypes = require("./utils/fetchTypes.js");
const PORT=3001


//!inicializando el servidor y sincronizando la base de datos

const startServer=async()=>{
  try {
    await dataBase.sync({ alter:true});
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
