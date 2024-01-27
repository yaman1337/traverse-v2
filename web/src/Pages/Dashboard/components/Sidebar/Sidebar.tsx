import React from 'react';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Menu, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text, Title  } = Typography;

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
        getItem('Favorites', 'dashboard/favorites'), 
        getItem('Reviews', 'dashboard/reviews'),
        getItem('Contribute', 'dashboard/contribute'),
    ], 'group'),

    { type: 'divider' },

    getItem('Settings', 'sub1', <SettingOutlined />, [
        getItem('Account', 'dashboard/settings/account'),
        getItem('Password', 'dashboard/settings/change-password'),
    ]),
];

export default function Sidebar() {
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e: EventListener) => {
        navigate(`/${e.key}`)
    };

    return (
        <>
        <div style={{width: 320}} className='bg-white'>
            <AvatarComponent name='Bibek Shah' email='bibekshah563@gmail.com'/>
            <Menu
                onClick={onClick}
                style={{ width: "100%", height: "55vh", fontWeight: 400, fontFamily: "'Roboto', sans-serif" }}
                // defaultSelectedKeys={['favorites']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
        </>
    );
}
