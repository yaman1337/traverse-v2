import React from 'react';
import { AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Menu, Typography } from 'antd';

const { Text, Link, Title  } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  avatar?: React.ReactNode, // Add an avatar parameter
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    avatar, // Include the avatar in the returned object
  } as MenuItem;
}

interface AvatarProps {
    name: string,
    email: string
}

// Placeholder for the AvatarComponent
const AvatarComponent = ({name, email}: AvatarProps) => {
    return(
        <>
        <div className='flex items-center justify-center flex-col h-[35vh]'>
            <Avatar size={120} icon={<UserOutlined />}>{name}</Avatar>
            <Title level={4} className='mt-4'>{name}</Title>
            <Text>{email}</Text>
        </div>
        </>
    )
};

const items: MenuProps['items'] = [

    getItem('Dashboard', 'grp', null, 
    [
        getItem('Favorites', 'favorites'), 
        getItem('Reviews', 'reviews'),
        getItem('Contribute', 'contribute'),
    ], 'group'),

    { type: 'divider' },

    getItem('Settings', 'sub1', <SettingOutlined />, [
        getItem('Account', 'account'),
        getItem('Password', 'change-password'),
    ]),
];

export default function Sidebar() {
  const onClick: MenuProps['onClick'] = (e: EventListener) => {
    console.log('click ', e);
    window.location.assign(`/${e.key}`)
  };

  return (
    <>
    <div style={{width: 280}} className='bg-white'>
        <AvatarComponent name='Bibek Shah' email='bibekshah563@gmail.com'/>
        <Menu
            onClick={onClick}
            style={{ width: "100%", height: "55vh" }}
            // defaultSelectedKeys={['favorites']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    </div>
    </>
  );
}
