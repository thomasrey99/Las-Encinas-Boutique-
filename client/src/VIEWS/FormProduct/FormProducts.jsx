import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Rate, Select, Input, InputNumber } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const FormProducts = () => {
  const products = useSelector((state) => state.items.allProducts);
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

  return (
    <>
      <div>FormProducts</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form
          style={{
            backgroundColor: '#8B4513', // Color de fondo marrón
            padding: '20px', // Agregamos espacio alrededor del formulario
            display: 'flex',
            flexDirection: 'row', // Alinear elementos en fila
            flexWrap: 'wrap', // Permitir que los elementos se envuelvan si no caben en una línea
            gap: '20px', // Espacio entre elementos
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1', // Ocupa todo el espacio disponible en la fila
              
            }}
          >
            <Form.Item label="Nombre">
              <Input
                name="name"
                value={state.name}
                onChange={(e) => handleChange('name', e.target.value)}
                style={{
                  backgroundColor: '#D2B48C',
                  width: '70%',
                }}
              />
            </Form.Item>

            <Form.Item label="Descripcion">
              <TextArea
                rows={4}
                name="description"
                value={state.description}
                onChange={(e) => handleChange('description', e.target.value)}
                style={{
                  backgroundColor: '#D2B48C',
                  width: '100%',
                }}
              />
            </Form.Item>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1', // Ocupa todo el espacio disponible en la fila
            }}
          >
            <Form.Item label="Precio" style={{ minWidth: '50%' }}>
              <InputNumber
                min={1}
                name="price"
                value={state.price}
                onChange={(value) => handleChange('price', value)}
                style={{
                  backgroundColor: '#D2B48C',
                  width: '100%',
                }}
              />
            </Form.Item>

            <Form.Item name="rating" label="Rate" style={{ minWidth: '50%' }}>
              <Rate
                value={state.rating}
                onChange={(value) => handleChange('rating', value)}
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              name="category"
              label="Categorias" 
              style={{ minWidth: '50%' }}
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
                style={{
                  backgroundColor: '#D2B48C',
                  width: '100%',
                }}
              >
                {products.map((product) => (
                  <Option value={product.name} key={product.id}>
                    {product.category}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#D2B48C',
              color: 'black',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Crear producto
          </button>
        </form>
      </div>
    </>
  );
};

export default FormProducts;
