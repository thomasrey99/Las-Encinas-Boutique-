import { useNavigate } from "react-router-dom";
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './menu.module.css'

const HamburguerMenu = () => {

    const navigate = useNavigate();

    return(
    <Menu mode="vertical" className={styles.antMenu}>
        <Menu.SubMenu key="SubMenu" title={<MenuOutlined/>} className={styles.subMenu}>
            <Menu.Item key="1" onClick={()=>navigate('/favorites')}>Productos Favoritos</Menu.Item>
        </Menu.SubMenu>
    </Menu>



    );
}

export default HamburguerMenu;