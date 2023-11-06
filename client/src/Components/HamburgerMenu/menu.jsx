import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './menu.module.css'

const HamburguerMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return(
    <Menu mode="horizontal" className={styles.antMenu}>
        <Menu.SubMenu key="SubMenu" title={<MenuOutlined style={{color:'#fff '}}/>}  className={styles.subMenu}>
            <Menu.Item key="1" onClick={()=>navigate('/favorites')} className={styles.menuItem }>Productos Favoritos</Menu.Item>
        </Menu.SubMenu>
    </Menu>

    );
}

export default HamburguerMenu;