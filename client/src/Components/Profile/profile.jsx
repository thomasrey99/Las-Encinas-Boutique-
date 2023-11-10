import axios from "axios"
import { useEffect } from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery ,useUpdateUserMutation } from "../../libs/redux/services/usersApi";
import { Card, Form, Input, Button, Upload, Spin } from 'antd';
//import { UserOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import styles from './profile.module.css'

const Profile = () => {

    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;

    const { data: getUserById, isLoading, refetch } = useGetUserByIdQuery(id);
    const [ updateUser ] = useUpdateUserMutation();

    const [ updateProfile, setUpdateProfile ] = useState({ image: '', name: '', lastName: '', address: '', email: '', phone: ''});

    useEffect(() => {
        if (getUserById) {
            setUpdateProfile({
                image: getUserById?.image ||'https://res.cloudinary.com/dkgeccpz4/image/upload/v1699475288/profileDefault_haxmxb.jpg', 
                name: getUserById.name, lastName: getUserById.lastName, address: user.address, 
                email: getUserById.email, phone: getUserById.phone,
            });
        } 
        refetch();
    }, [getUserById]);


    const defaultFileList = [{ uid: '-1', name: 'image.png', status: 'done',
          url: updateProfile.image,},];
    
    const [fileList, setFileList] = useState(defaultFileList);


    const onChange = async ({  fileList: newFileList }) => {
        
        if (newFileList.length === 0) setFileList(defaultFileList);
        
        else setFileList([newFileList[newFileList.length - 1]]);
    };
    
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    useEffect(() => {
        console.log(updateProfile);
    },[updateProfile])

    const uploadImage = async ({ file, onSuccess, onError }) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'Las Encinas Boutique');
      
            const response = await axios.post('https://api.cloudinary.com/v1_1/dkgeccpz4/image/upload', formData);
            const imageUrl = response.data.secure_url;

            setUpdateProfile({ ...updateProfile, image: imageUrl });
            setFileList([{ uid: '-1', name: 'image.png', status: 'done', url: imageUrl }]);
      
            onSuccess(null, file);
        } catch (error) {
            console.error('Error al cargar la imagen', error);
            onError(error);
        }
    };

    const handleOnChange = (e) => {
        setUpdateProfile({
          ...updateProfile,
          [e.target.name]: e.target.value,
        });
      };

//     useEffect(() => {
//     const updateUserData = async () => {
//     await updateUser({ id, updateProfile });
//   };

//   updateUserData();
// }, [updateProfile]);

    const onFinish = async (values) => {
        const newProfile={ ...updateProfile, ...values };
        console.log(newProfile);
        setUpdateProfile(newProfile);

        await updateUser({id, updateProfile});
        refetch();
    }

    return(
        <div className={styles.profileContainer}>
            {isLoading || !getUserById || !user
            ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin>
            : <div>
                <Card className={styles.userCard}>
                    <div className={styles.uploadImage}>
                        <ImgCrop rotationSlider>
                            <Upload
                                customRequest={uploadImage}
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}>
                                    {fileList.length < 2 && '+    Subir Imagen'}
                            </Upload>
                        </ImgCrop>
                    </div>
                    <Form
                        name="profile"
                        initialValues={updateProfile}
                        onFinish={onFinish}>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Por favor ingresa tu nombre!' }]}>
                            <Input placeholder="Nombre" onChange={handleOnChange} />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            rules={[{ required: true, message: 'Por favor ingresa tu apellido!' }]}>

                            <Input placeholder="Apellido" onChange={handleOnChange} />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico!' }]}>
                            <Input placeholder="Correo Electrónico" onChange={handleOnChange} />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Por favor ingresa tu número de teléfono!' }]}>
                            <Input placeholder="Teléfono" onChange={handleOnChange} />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Por favor ingresa tu dirección!' }]}>
                            <Input placeholder="Dirección" onChange={handleOnChange} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={styles.butonUpdateProfile} style={{margin: '0 35%'}}>
                            Actualizar Perfil
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>}
        </div>
    );
}

export default Profile;