import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider, signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './updatePassword.module.css'

const FormUpdatePassword = () => {

    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const currentUser = auth.currentUser;

    const [modalVisible, setModalVisible] = useState(false);
    const [successVisible, setSuccessVisible] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = async () => {
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
            await updatePassword(currentUser, newPassword);
            console.log('Contraseña actualizada exitosamente');
            setSuccessVisible(true);
        } catch (error) {
            console.error('Error al actualizar la contraseña', error);
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
        navigate('/login')
    }

    const handleErrorOk = () => {
        setErrorVisible(false);
    }

    return(
        <div>
            <div>
                <Form                 
                    name="UpdatePassword"
                    onFinish={handleSubmit}>

                    <label htmlFor="">Cambiar contraseña</label>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Ingresa tu nueva contraseña!'}]}>
                        <div className={styles.inputGroup}>
                            <Input placeholder="Contraseña" type="password" onChange={handleChange} readOnly={!isEditing}
                                value={newPassword} />
                            <Button onClick={() => setIsEditing(!isEditing)}>
                                {isEditing?<CloseOutlined/>:<EditOutlined/>}
                            </Button>
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
                <Modal title="Éxito" visible={successVisible} onOk={handleSuccessOk} closable={false}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleSuccessOk}>
                            Aceptar
                        </Button>,
                    ]}>
                    <p>Contraseña actualizada exitosamente. Por favor vuelve a iniciar sesión con la nueva contraseña.</p>
                </Modal>
                <Modal title="Error" visible={errorVisible} onOk={handleErrorOk} closable={false}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleErrorOk}>
                            Aceptar
                        </Button>,
                    ]}>
                    <p>Hubo un error al actualizar la contraseña. Por favor intenta de nuevo.</p>
                </Modal>
            </div>
        </div>
    );
}

export default FormUpdatePassword;
