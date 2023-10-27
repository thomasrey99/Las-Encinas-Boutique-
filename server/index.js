const server = require("./src/app")
const { dataBase } = require('./src/db.js');

const PORT=3001


//!inicializando el servidor y sincronizando la base de datos

server.listen(PORT, ()=>{
  dataBase.sync({force:true})
  console.log(`server listen in port ${PORT}`)
})
