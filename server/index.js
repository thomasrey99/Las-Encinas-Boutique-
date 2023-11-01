const server = require("./src/app")
const { dataBase } = require('./src/db.js');
const fetchCategories = require("./src/utils/fetchCategories");
const fetchTypes = require("./src/utils/fetchTypes");
const PORT=3001


//!inicializando el servidor y sincronizando la base de datos

server.listen(PORT, ()=>{
  dataBase.sync({alter:true})
  fetchCategories()
  fetchTypes()
  console.log(`server listen in port ${PORT}`)
})
