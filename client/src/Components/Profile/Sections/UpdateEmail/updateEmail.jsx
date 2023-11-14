import { getAuth, reauthenticateWithCredential, signOut, verifyBeforeUpdateEmail, EmailAuthProvider} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery ,useUpdateUserMutation } from "../../../../libs/redux/services/usersApi";
import { Form, Input, Button, Spin, Modal, Alert } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './updateEmail.module.css'

const FormUpdateEmail = () => {

    const navigate = useNavigate();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const currentEmail = auth.currentUser.email;

    const [isEditing, setIsEditing] = useState(false);
    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;
    const { data: getUserById, isLoading, isError, refetch } = useGetUserByIdQuery(id);
    const [ updateUser ] = useUpdateUserMutation();

    const [ updateProfile, setUpdateProfile ] = useState({email: '', image: '', name: '', lastName: '',
     address: '',  phone: '', is_Admin: '', is_Delete: ''});

    useEffect(() => {
        if (getUserById) setUpdateProfile({email: getUserById.email, image: getUserById?.image, 
            name: getUserById.name, lastName: getUserById.lastName, address: user.address, phone: getUserById.phone,
            is_Admin: getUserById.is_Admin, is_Delete: getUserById.is_Delete
        });
        refetch();
    }, [getUserById, currentEmail]);

    // VERIFICACIÓN USUARIO
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Mensajes usuario
    const [successVisible, setSuccessVisible] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);

    // Actualizacion estado
    const handleOnChange = (e) => {
        setUpdateProfile({
          ...updateProfile,
          email: e.target.value,
        });
    };
    
    useEffect(() => {
        const updateUserData = async () => {
        await updateUser({ id, updateProfile });
    };
        updateUserData();
    }, [updateProfile]);


    //Envío formulario
    const onFinish = async () => {

        setModalVisible(true);
    }

    const handleOk = async () => {

        const credential = EmailAuthProvider.credential(email, password);

        try {
            await reauthenticateWithCredential(currentUser, credential);
            console.log('Usuario reautenticado exitosamente');
    
        } catch (error) {
            console.error('Error al reautenticar el email', error);
            setErrorVisible(true);
            setModalVisible(false);
            return;
        }

        try {
            await verifyBeforeUpdateEmail(currentUser, updateProfile.email);
            await updateUser({id, updateProfile});
            refetch();
            setSuccessVisible(true);
            console.log('Correo electrónico actualizado exitosamente');

        } catch (error) {
            console.error('Error al actualizar el correo electrónico', error);
            setErrorVisible(true);
            setModalVisible(false);
            return;
        }
        setModalVisible(false);
    }

    const handleCancel = () => {
        setModalVisible(false);
    }
    
    const handleSuccessOk = () => {
        setSuccessVisible(false);
        signOut(auth);
        navigate('/login');
    }

    const handleErrorOk = () => {
        setErrorVisible(false);
    }
    
    const validateEmail = (rule, value) => {
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
            return Promise.reject('El correo electrónico no es válido.');
        }
        return Promise.resolve();
    }
    
    return(
        <div>
            {isLoading 
            ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin>
            : isError || !user || !getUserById 
            ? <Alert message="info" description="Por favor, intente de nuevo más tarde." type="error" 
            showIcon className={styles}/>
            : 
            <div>
                <Form                 
                    name="UpdateEmail"
                    initialValues={getUserById}
                    onFinish={onFinish}>

                    <label>{isEditing ?'Cambiar correo':'Correo'}</label>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico!'}, 
                            {validator: validateEmail, message: 'Email inválido.'}]}>
                        <div className={styles.inputGroup}>
                            <Input placeholder="Correo Electrónico" onChange={handleOnChange} readOnly={!isEditing}
                            value={updateProfile.email} />
                            <Button onClick={() => setIsEditing(!isEditing)}>
                                {isEditing?<CloseOutlined/>:<EditOutlined/>}</Button>
                            {isEditing && 
                            <Button type="primary" htmlType="submit" className={styles.butonUpdateProfile}>
                                Actualizar
                            </Button>}
                        </div>
                    </Form.Item>
                </Form>
                <Modal title="Por favor, introduce tus credenciales" visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Input placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} />
                </Modal>
                <Modal title="Correo Actualizado con Éxito" visible={successVisible} onOk={handleSuccessOk} closable={false}
                  footer={[
                    <Button key="submit" type="primary" onClick={handleSuccessOk}>
                      Aceptar
                    </Button>,]}>
                    <p>Para continuar, por favor revisa tu bandeja de entrada en el nuevo correo.</p>
                    <p>Inicia sesión con tu nuevo correo electrónico y ¡listo!</p>
                </Modal>
                <Modal title="Error" visible={errorVisible} onOk={handleErrorOk} closable={false}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleErrorOk}>
                            Aceptar
                        </Button>,]}>
                    <p>Hubo un error al actualizar el correo electrónico. Por favor intenta de nuevo.</p>
                </Modal>
            </div>}
        </div>
    );
    
}

export default FormUpdateEmail;