const cloudinary = require('cloudinary').v2;
require('dotenv').config();

//!CARGA DE PRUEBA
cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

//!CONFIGURACIÓN CLOUDNARY
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//!FUNCIÓN PARA CARGAR IMÁGENES
const uploadImage = async (imageUrl) => {
    try {
      const result = await cloudinary.uploader.upload(imageUrl);
      return result.secure_url;
    } catch (error) {
      console.error(error);
    }
};

module.exports = uploadImage;
//ENDPOIN SOLICITUES:
// app.post('/upload', async (req, res) => {
//     const imageUrl = req.body.imageUrl;
//     const uploadedImageUrl = await uploadImage(imageUrl);
    
//     // Aquí puedes guardar `uploadedImageUrl` en tu base de datos.
    
//     res.json({ imageUrl: uploadedImageUrl });
// });