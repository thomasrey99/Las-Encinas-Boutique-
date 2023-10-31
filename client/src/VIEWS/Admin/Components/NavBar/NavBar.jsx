import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

const NavBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    const handleClick = (key) => {
        console.log(key);
    }
  return (
    <div
      style={{
        width: 256,
        height: "100%"
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={({ key }) => handleClick(key)}
        items={[
            getItem('Panel de Control', '1', <PieChartOutlined/>),
            getItem('Poductos', '2', <DesktopOutlined />),
            getItem('Pedidos', '3', <ContainerOutlined />),
            getItem('Clientes', '4', <ContainerOutlined />),
            getItem('Pagos', '5', <ContainerOutlined />),
          ]}
      />
    </div>
  )
}

export default NavBar