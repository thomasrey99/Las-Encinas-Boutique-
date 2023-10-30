// FALTA SOLO COUDY

import React from 'react';
import Style from './FormProduct.module.css';

import { useCreateProductMutation } from '../../libs/redux/services/productsApi';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Select, Upload, Rate } from 'antd';


const { TextArea } = Input;
const { Option } = Select;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };

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

const FormProducts = () => {
  const [mutate] = useCreateProductMutation();

  const handleSubmit = async (values) => {
    try {
      await mutate(values);
    } catch (error) {
      alert("Error: " + error);
    }
  }

  return (
    <div className={Style.Container}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit}
      >
        <h1>CREAR PRODUCTO:</h1>

        <Form.Item label="Nombre" style={{ marginTop: "5%" }} name="name" rules={[{ required: true, message: 'Ingrese el nombre' }]}>
          <Input placeholder='Ingrese el nombre...' />
        </Form.Item>

        <Form.Item label="Categorías:" name="category" rules={[{ required: true, message: 'Seleccione una categoría' }]}>
          <Select placeholder="Seleccionar categoría">
            {categories.map((e) => (
              <Option value={e} key={e}>
                {e}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Precio:" name="price" rules={[{ required: true, message: 'Ingrese el precio' }]}>
          <InputNumber min={1} placeholder='Ingrese el precio...' style={{ width: "100%" }}/>
        </Form.Item>

        <Form.Item label="Rate" name="raiting" rules={[{ required: true, message: 'Seleccione el raiting' }]}>
          <Rate allowHalf placeholder='Ingrese el rate...' />
        </Form.Item>

        <Form.Item label="Descripción:" name="description" rules={[{ required: true, message: 'Seleccione una descripcion' }]}>
          <TextArea rows={4} placeholder='Ingrese la descripción...' />
        </Form.Item>

        {/* <Form.Item label="Imagen:" name="image" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item> */}
        <button type="submit">Subir producto</button>
      </Form>
    </div>
  );
};

export default FormProducts;
