import React from 'react';
import { Menu, Avatar, Tooltip,Button } from 'antd';
import { UserOutlined, BellOutlined,SearchOutlined } from '@ant-design/icons';

const Menus = () => {
  return (
    <Menu style={{display:"flex",alignItems:'center',justifyContent:'end',height:'70px',paddingLeft:'20px'}} theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Avatar icon={<UserOutlined />} />
        <span >Iron Man</span>
      </Menu.Item>

      <Menu.Item key="2">
      <Tooltip title="search">
        <Button shape="circle" style={{width:'50px', height:'50px'}} icon={<SearchOutlined />} />
      </Tooltip>      </Menu.Item>

      <Menu.Item key="3" style={{ marginLeft: 'auto' }}>
        <BellOutlined />
      </Menu.Item>
    </Menu>
  );
};

export default Menus;
