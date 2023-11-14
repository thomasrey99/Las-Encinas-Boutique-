// import { useEffect } from "react";
// import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery } from "../../libs/redux/services/usersApi";
import ShoppingHistory from "./Sections/ShoppingHistory/shoppingHistory";
import FormUpdateEmail from "./Sections/UpdateEmail/updateEmail";
import FormUpdatePassword from "./Sections/UpdatePassword/updatePassword";
import UpdateProfile from "./Sections/UpdateUser/updateProfile";
import { Card, Spin, Tabs } from 'antd';
const { TabPane } = Tabs;
//import { UserOutlined } from '@ant-design/icons';
import styles from './profile.module.css'
import { useTranslation } from 'react-i18next';

const Profile = () => {

    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;
    const { t  } = useTranslation("global");
    const { data: getUserById, isLoading, refetch } = useGetUserByIdQuery(id);
    
    return(
        <div className={styles.profileContainer}>
            {isLoading || !getUserById || !user
            ? <Spin tip={t("profileMain.Loading")} className={styles.loading}><div className="content"/></Spin>
            : <div>
                <Card className={styles.userCard}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={t("profileMain.Basic Information")} key="1">
                            <UpdateProfile/>
                        </TabPane>
                        <TabPane tab={t("profileMain.Security")} key="2">
                            <FormUpdateEmail/>
                            <FormUpdatePassword/>
                        </TabPane>
                        <TabPane tab={t("profileMain.Shopping")} key="3">
                            <ShoppingHistory/>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>}
        </div>
    );
}

export default Profile;
