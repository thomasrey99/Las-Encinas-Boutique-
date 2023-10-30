import  { useState } from 'react';
import axios from "axios"
import { Form, Rate, Select, Input, InputNumber, Upload, Button } from 'antd';
import { useCreateProductMutation } from '../../libs/redux/services/productsApi';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;
import styles from './FormProduct.module.css';


const FormProducts = () => {

  const [mutate] = useCreateProductMutation();

  const [imageToCloud, setImageToCloud] = useState('');
  const [state, setState] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    raiting: 0,
    category: [],
  });

  const resetState = () => { setState({ name: '', image: '', price: 0, description: '', rating: 0, category: [], });};

  const handleChange = (name, value) => {
    console.log(state);
    setState({
      ...state,
      [name]: value,
    });
  };

  // Vista previa de imagen
  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImageToCloud(reader.result);
  }
  
  // Actualiza estado con la imagen subbida
  const handleImageUpload = async (e) =>  {

    const file = e.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'Las Encinas Boutique'); 
    
        const response = await axios.post('https://api.cloudinary.com/v1_1/dkgeccpz4/image/upload', formData);
        const imageUrl = response.data.secure_url;
    
        setState({
          ...state,
          image: imageUrl,
        });
      } catch (error) {
        console.error('Error al cargar la imagen', error);
      }
      previewFiles(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const categoryString = state.category.join(',');
      const dataToSend = {...state, category: categoryString};
      await mutate(dataToSend);
      resetState();

   } catch (error) {
      console.log({ error: error.message, details: error.details });
      alert("Error al crear producto: " + error);
   }
  };

  const categories = [
  "todas",
  "Alfajores",
  "Chocolate en rama",
  "Bocaditos",
  "Chocolate en barra", 
  "Volcáncito",
  "Marroc",
  "Huevos de pascua",
  "Oreo",
  "Brownie"
];

  return (
    <div>
      <Form className={styles.Container} 
        onSubmit={handleSubmit} 
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal">

        <h1>CREAR PRODUCTO:</h1>
        <Form.Item label="Nombre" name="name" rules={[{ marginTop: "5%", required: true, message: 'Ingrese el nombre'}]}>
          <Input name="name" value={state.name} onChange={(e) => handleChange('name', e.target.value)} />
        </Form.Item>

        <Form.Item label="Precio" name="price" rules={[{ required: true, message: 'Ingrese el precio' }]}>
          <InputNumber min={1} name="price" placeholder='Ingrese el precio...' style={{ width: "100%" }} 
          value={state.price} onChange={(value) => handleChange('price', value)} />
        </Form.Item>

        <Form.Item label="Descripcion" name="description" rules={[{ required: true, message: 'Seleccione una descripcion' }]} >
          <TextArea rows={4} name='description' placeholder='Ingrese la descripción' value={state.description}
            onChange={(e) => handleChange('description', e.target.value)} />
        </Form.Item>

        <Form.Item name='raiting' label="Rate" rules={[{ required: true, message: 'Seleccione el raiting' }]}>
          <Rate allowHalf placeholder='Ingrese el rate...' value={state.raiting} 
          onChange={(value) => handleChange('raiting', value)}/>
        </Form.Item>

        <Form.Item label="Imagen (URL) o Cargar Imagen">
          <Input name="image" value={state.image} onChange={(e) => handleChange('image', e.target.value)}/>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </Form.Item>

        {imageToCloud && <img src={imageToCloud} alt="" />}

        <Form.Item name="category" label="Categorias"
          rules={[{ required: true, message: 'Elije al menos una categoría', type: 'array',},]}>
          <Select mode="multiple" placeholder="Elije una categoría" value={state.category} 
            onChange={(value) => handleChange('category', value)}>
            {categories.map((c) => (
              <Option value={c} key={c}>
                {c}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Button type='submit'>Crear producto</Button>
      </Form>
    </div>
  );
};

export default FormProducts;