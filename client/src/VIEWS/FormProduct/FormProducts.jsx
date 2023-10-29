import  { useState } from 'react';
// import { Upload} from 'antd';
import { Form, Rate, Select, Input, InputNumber, } from 'antd';
import { useCreateProductMutation } from '../../libs/redux/services/productsApi';
const { Option } = Select;
const { TextArea } = Input;
import styles from './FormProduct.module.css';

const FormProducts = () => {

  const [mutate] = useCreateProductMutation();

  const [state, setState] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    raiting: 0,
    category: [],
  });

  // const resetState = () => {
  //   setState({
  //     name: '',
  //     image: '',
  //     price: 0,
  //     description: '',
  //     rating: 0,
  //     category: [],
  //   });
  // };

  const handleChange = (name, value) => {
    console.log(state);
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutate(state);
   } catch (error) {
      console.log(error);
   }
    // resetState();
  };

  const sa = ["a", "b", "c"];

  return (
    <>
      <div>FormProducts</div>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <Form.Item label="Nombre">
          <Input
            name="name"
            value={state.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Imagen">
          <Input
            name="image"
            value={state.image}
            onChange={(e) => handleChange('image', e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Descripcion">
          <TextArea
            rows={4}
            name='description'
            value={state.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Precio">
          <InputNumber
            min={1}
            name="price"
            value={state.price}
            onChange={(value) => handleChange('price', value)}
          />
        </Form.Item>

        <Form.Item name='raiting' label="Rate">
          <Rate
            value={state.raiting}
            onChange={(value) => handleChange('raiting', value)}
          />
        </Form.Item>

        <Form.Item
          name="category"
          label="Categorias"
          rules={[
            {
              required: true,
              message: 'Elije al menos una categoría',
              type: 'array',
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Elije una categoría"
            value={state.category}
            onChange={(value) => handleChange('category', value)}
          >
            {sa.map((c) => (
              <Option value={c} key={c}>
                {c}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <button type='submit'>Crear producto</button>
      </form>
    </>
  );
};

export default FormProducts;