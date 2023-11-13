import { getAuth, reauthenticateWithCredential, signOut, verifyBeforeUpdateEmail, EmailAuthProvider} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery ,useUpdateUserMutation } from "../../../../libs/redux/services/usersApi";
import { Form, Input, Button, Spin, Modal } from 'antd';
import styles from './updateEmail.module.css'

const FormUpdateEmail = () => {

    //const navigate = useNavigate();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const currentEmail = auth.currentUser.email;
    console.log(auth.currentUser.email);

    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;
    const { data: getUserById, isLoading, refetch } = useGetUserByIdQuery(id);
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


    // Verificación usuario
    const promptForCredentials = () => {
        const email = prompt('Por favor, introduce tu correo electrónico');
        const password = prompt('Por favor, introduce tu contraseña');
        return EmailAuthProvider.credential(email, password);
    };

    //Envío formulario
    const onFinish = async (values) => {

        const newEmail = values.email;
        const credential = promptForCredentials();

        try {
            await reauthenticateWithCredential(currentUser, credential);
            console.log('Usuario reautenticado exitosamente');
    
        } catch (error) {
            console.error('Error al reautenticar el email', error);
        }

        try {
            await verifyBeforeUpdateEmail(currentUser, newEmail);
            await updateUser({id, updateProfile});
            refetch();
            console.log('Correo electrónico actualizado exitosamente');
            // await signOut(auth);

        } catch (error) {
            console.error('Error al actualizar el correo electrónico', error);
        }
    }
    

    const validateEmail = (rule, value) => {
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
            return Promise.reject('El correo electrónico no es válido.');
        }
        return Promise.resolve();
    }
    
    return(
        <div>
            {isLoading || !user || !getUserById
            ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin>
            : <div>
                <Form                 
                    name="UpdateEmail"
                    initialValues={getUserById}
                    onFinish={onFinish}>

                    <label htmlFor="">Cambiar correo</label>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico!'}, 
                            {validator: validateEmail, message: 'Email inválido.'}]}>
                        <Input placeholder="Correo Electrónico" onChange={handleOnChange} value={updateProfile.email} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.butonUpdateProfile}>
                            Actualizar
                        </Button>
                    </Form.Item>
                </Form>
            </div>}
        </div>
    );
    
}

export default FormUpdateEmail;