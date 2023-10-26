import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Style from './FormProduct.module.css';

import { Button, Form, Rate, Select, Upload, Input, InputNumber } from 'antd';

import { useCreateProductMutation } from '../../libs/redux/services/productsApi';

const { Option } = Select;
const { TextArea } = Input;

const FormProducts = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    image: 'image',
    price: 0,
    description: '',
    rating: 0,
    category: [],
  });

  const resetState = () => {
    setState({
      name: '',
      image: '',
      price: 0,
      description: '',
      rating: 0,
      category: [],
    });
  };

  const handleChange = (name, value) => {
    console.log(state);
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(useCreateProductMutation(state));
    // resetState();
  };

  const sa = ["a", "b", "c"];

  return (
    <>
      <div>FormProducts</div>
      <form className={Style.Form}>
        <Form.Item label="Nombre">
          <Input
            name="name"
            value={state.name}
            onChange={(e) => handleChange('name', e.target.value)}
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

        <Form.Item name='rating' label="Rate">
          <Rate
            value={state.rating}
            onChange={(value) => handleChange('rating', value)}
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

        <button onClick={handleSubmit}>Crear producto</button>
      </form>
    </>
  );
};

export default FormProducts;