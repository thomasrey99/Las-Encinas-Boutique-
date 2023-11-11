import { auth, updateEmail, sendEmailVerification } from '../../../../firebase/firebase';
import { useEffect } from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery ,useUpdateUserMutation } from "../../../../libs/redux/services/usersApi";
import { Form, Input, Button, Spin } from 'antd';
import styles from './updateEmail.module.css'

const FormUpdateEmail = () => {
    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;

    const { data: getUserById, isLoading, refetch } = useGetUserByIdQuery(id);
    const [ updateUser ] = useUpdateUserMutation();

    const [ updateEmailUser, setUpdateEmailUser ] = useState({email: ''});

    useEffect(() => {
        if (getUserById) setUpdateEmailUser({email: getUserById.email});

        refetch();
        console.log(getUserById);
    }, [getUserById]);

    // Actualizacion estado
    const handleOnChange = (e) => {
        setUpdateEmailUser({email: e.target.value});
    };

//     useEffect(() => {
//     const updateUserData = async () => {
//     await updateUser({ id, updateProfile });
//   };
//     updateUserData();
//     }, [updateProfile]);


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

        await updateUser({id, updateEmailUser});
        refetch();
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
                        {validator: validateEmail, message: 'Email inválido.'  }]}>
                    <Input placeholder="Correo Electrónico" onChange={handleOnChange} value={updateEmailUser.email} />
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