import axios from "axios"
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Card, Form, Input, Button, Upload, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import styles from './profile.module.css'

const Profile = () => {

    // const [fileList, setFileList] = useState([]);


    // const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList.slice(-1)); 
        
    // };
    const user = useSelector(state => state.user.userLog)
    console.log(user);
    const [file, setFile] = useState(null);

    const [ updateProfile, setUpdateProfile ] = useState({
        image: '',
        name: user.name,
        lastName: user.lastName,
        address: user.address,
        email: user.email,
        phone: user.phone,
    });

    const handleImageUpload = async (e) => {
        const file = e.file;
        console.log(file);
        if (file) {
            setFile(file)
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'Las Encinas Boutique'); 

                const response = await axios.post('https://api.cloudinary.com/v1_1/dkgeccpz4/image/upload', formData);
                const imageUrl = response.data.secure_url;

                setUpdateProfile({ ...updateProfile, image: imageUrl });
            } catch (error) {
                console.error('Error al cargar la imagen', error);
            }
        }
    };

    const onFinish = async (values) => {
        setUpdateProfile({ ...updateProfile, ...values });
        console.log('Received values of form: ', values);
    }

    return(
        <div className={styles.profileContainer}>
            <Card className={styles.userCard}>
                <div className={styles.uploadImage}>
                    <ImgCrop rotationSlider >
                        <Upload
                            listType="picture-card"
                            fileList={file ? [file] : []}  
                            onChange={handleImageUpload}
                            beforeUpload={file => { handleImageUpload(file); return false;}}>
                            {!file ? <Avatar size={64} icon={<UserOutlined />} /> : 'Cambiar Imagen'} 
                        </Upload>
                    </ImgCrop>
                </div>
                <Form
                    name="profile"
                    initialValues={user}
                    onFinish={onFinish}>

                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Por favor ingresa tu nombre!' }]}>
                        <Input placeholder="Nombre"/>
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        rules={[{ required: true, message: 'Por favor ingresa tu apellido!' }]}>

                        <Input placeholder="Apellido" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico!' }]}>
                        <Input placeholder="Correo Electrónico" />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Por favor ingresa tu número de teléfono!' }]}>
                        <Input placeholder="Teléfono" />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        rules={[{ required: true, message: 'Por favor ingresa tu dirección!' }]}>
                        <Input placeholder="Dirección" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.butonUpdateProfile} style={{margin: '0 35%'}}>
                         Actualizar Perfil
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Profile;