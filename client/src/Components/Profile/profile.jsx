import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useGetUserByIdQuery } from "../../libs/redux/services/usersApi";
import ShoppingHistory from "./Sections/ShoppingHistory/shoppingHistory";
import FormUpdateEmail from "./Sections/UpdateEmail/updateEmail";
import FormUpdatePassword from "./Sections/UpdatePassword/updatePassword";
import UpdateProfile from "./Sections/UpdateUser/updateProfile";
import RequestDetail from './Sections/ShoppingHistory/RequestDetail/requestDetail';
import { Card, Spin, Tabs, Alert, Button } from 'antd';
const { TabPane } = Tabs;
import styles from './profile.module.css'

const Profile = () => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user.userLog)
    const id = user?.uid;

    const { data: getUserById, isLoading, isError, refetch } = useGetUserByIdQuery(id);
    
    return(
        <div className={styles.profileContainer}>
            {isLoading 
            ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin>
            : isError ?
            <Alert message="Error al cargar datos" description={<div>
                <p>Hubo un problema al cargar los datos, por favor intenta de nuevo más tarde.</p>
                <Button type='primary' onClick={()=>navigate('/home')}>Página principal</Button>
            </div>} type="error" 
            showIcon className={styles.alert}/> 
            : !getUserById || !user?
            <Alert message="No se pudo cargar la información del usuario" description={<div>
                <p>Por favor, inicia sesión para continuar.</p>
                <Button type='primary' onClick={()=>navigate('/login')}>Iniciar Sesión</Button>
            </div>} type="info" 
            showIcon className={styles.alert}/> 
            :<div>
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