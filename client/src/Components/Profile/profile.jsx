import axios from "axios"
import { auth, updateEmail, sendEmailVerification  } from '../../firebase/firebase';
import { useEffect } from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery ,useUpdateUserMutation } from "../../libs/redux/services/usersApi";
import ShoppingHistory from "../ShoppingHistory/shoppingHistory";
import FormUpdateEmail from "./Sections/UpdateEmail/updateEmail";
import UpdateProfile from "./Sections/UpdateUser/updateProfile";
import { Card, Form, Input, Button, Spin, Tabs } from 'antd';
const { TabPane } = Tabs;
//import { UserOutlined } from '@ant-design/icons';
import styles from './profile.module.css'

const Profile = () => {

    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;

    const { data: getUserById, isLoading, refetch } = useGetUserByIdQuery(id);
    const [ updateUser ] = useUpdateUserMutation();

    const [ updateProfile, setUpdateProfile ] = useState({ image: '', name: '', lastName: '', address: '', email: '', phone: ''});

    // Cargo al estado con el usuario
    useEffect(() => {
        if (getUserById) {
            setUpdateProfile({
                image: getUserById?.image ||'https://res.cloudinary.com/dkgeccpz4/image/upload/v1699475288/profileDefault_haxmxb.jpg', 
                name: getUserById.name, lastName: getUserById.lastName, address: user.address, 
                email: getUserById.email, phone: getUserById.phone,
            });
        } 
        refetch();
        console.log(getUserById);
    }, [getUserById]);

    //Carga de imagen
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

    // Subida de imagen y actualización de la propiedad del estado
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

    // Actualizacion estado
    const handleOnChange = (e) => {
        setUpdateProfile({
          ...updateProfile,
          [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
    const updateUserData = async () => {
    await updateUser({ id, updateProfile });
  };

    updateUserData();
    }, [updateProfile]);

    //Envío formulario
    const onFinish = async (values) => {
        try {
            const newEmail = values.email;
            //await getIdToken(auth.currentUser);
            await sendEmailVerification(newEmail);
            await updateEmail(auth.currentUser, newEmail);
            console.log('Correo electrónico actualizado exitosamente');
        } catch (error) {
            
            console.error('Error al actualizar el correo electrónico', error);
        }

        const newProfile={ ...updateProfile, ...values };
        setUpdateProfile(newProfile);

        
        await updateUser({id, updateProfile});
        refetch();
    }
    
    // const handlePasswordUpdate = async (newPassword) => {
    //     try {
    //         // Actualiza la contraseña del usuario en Firebase
    //         await userFirebase.updatePassword(newPassword);
    //         console.log('Contraseña actualizada exitosamente');
    //     } catch (error) {
    //         // Si hay un error, regístralo
    //         console.error('Error al actualizar la contraseña', error);
    //     }
    // }
    // const upEmailFirebase = async () => {
    //     await userFirebase.updateEmail(updateProfile.email).then(() => {
    //         console.log(updateProfile.email);
    //     }).catch((error) => {
    //         console.error(error);
    //       });
    // }

    
    const validateEmail = (rule, value) => {
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
            return Promise.reject('El correo electrónico no es válido.');
        }
        return Promise.resolve();
    }
    

    return(
        <div className={styles.profileContainer}>
            {isLoading || !getUserById || !user
            ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin>
            : <div>
                <Card className={styles.userCard}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Información básica" key="1">
                            <UpdateProfile/>
                        </TabPane>
                        <TabPane tab="Configuración de seguridad" key="2">
                            <div style={{}}>
                                <Form
                                    name="profile"
                                    initialValues={getUserById}
                                    onFinish={onFinish}
                                    >

                                    <label>Correo</label>
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Correo electrónico inválido!'}, 
                                                {validator: validateEmail, message: 'Email inválido.'  }]}>
                                        <Input placeholder="Correo Electrónico" onChange={handleOnChange} value={updateProfile.email} 
                                            />
                                            {/* <Button type="primary" onClick={() => handleEmailUpdate(updateProfile.email)}>
                                                Actualizar correo electrónico
                                            </Button> */}
                                    </Form.Item>

                                                                        {/* <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico!'}, 
                                                {validator: validateEmail, message: 'Email inválido.'  }]}>
                                        <Input placeholder="Correo Electrónico" onChange={handleOnChange} value={updateProfile.email} />
                                    </Form.Item> */}
{/* 
                                    <label>Contraseña</label>
                                    <Form.Item
                                        name="phone"
                                        rules={[{ required: true, message: 'Por favor ingresa tu número de teléfono!'},
                                                {validator: validatePhone, message: 'Número inválido.' }]}>
                                        <Input placeholder="Teléfono" onChange={handleOnChange} value={updateProfile.phone} />
                                    </Form.Item> */}

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className={styles.butonUpdateProfile} >
                                        Actualizar
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </TabPane>
                        <TabPane tab="Compras" key="3">
                            <ShoppingHistory/>
                        </TabPane>
                        <TabPane tab='Email' key="4">
                            <FormUpdateEmail/>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>}
        </div>
    );
}

export default Profile;