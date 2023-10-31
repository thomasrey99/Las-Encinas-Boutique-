import { useNavigate } from "react-router-dom";
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const HamburguerMenu = () => {

    const navigate = useNavigate();

    return(
    <Menu mode="vertical">
        <Menu.SubMenu key="SubMenu" title={<MenuOutlined/>}>
            <Menu.Item key="1" onClick={()=>navigate('/favorites')}>Productos Favoritos</Menu.Item>
            <Menu.Item key="2">Opción 2</Menu.Item>
        </Menu.SubMenu>
    </Menu>



    );
}

export default HamburguerMenu;