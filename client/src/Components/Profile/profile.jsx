// import { useEffect } from "react";
// import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery } from "../../libs/redux/services/usersApi";
import ShoppingHistory from "./Sections/ShoppingHistory/shoppingHistory";
import FormUpdateEmail from "./Sections/UpdateEmail/updateEmail";
import FormUpdatePassword from "./Sections/UpdatePassword/updatePassword";
import UpdateProfile from "./Sections/UpdateUser/updateProfile";
import RequestDetail from './Sections/ShoppingHistory/RequestDetail/requestDetail';
import { Card, Spin, Tabs } from 'antd';
const { TabPane } = Tabs;
//import { UserOutlined } from '@ant-design/icons';
import styles from './profile.module.css'

const Profile = () => {

    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;

    const { data: getUserById, isLoading, refetch } = useGetUserByIdQuery(id);
    
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
                        <TabPane tab="Seguridad" key="2">
                            <FormUpdateEmail/>
                            <FormUpdatePassword/>
                        </TabPane>
                        <TabPane tab="Compras" key="3">
                            <ShoppingHistory/>
                        </TabPane>
                        <TabPane tab="Detalle pedido" key="4">
                            <RequestDetail/>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>}
        </div>
    );
}

export default Profile;