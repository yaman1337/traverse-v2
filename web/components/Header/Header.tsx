"use client"

import Link from "next/link";

import "./header.style.css"

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

export const revalidate = 0

export default function Header() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];

  return (
    <>
    <div className="header">
      <div className="logo">
      <Link style={{ textDecoration: "none", color: "#892be1" }} href="/">
        Traverse
      </Link>
      </div>
      <div className="center">
        <ul>
          <li className="header-items">
            <Link style={{ textDecoration: "none", color: "black" }} href="/">
              Home
            </Link>
          </li>
          <li className="header-items"> 
            <Link style={{ textDecoration: "none", color: "black" }} href="/favourites">
              Favourites
            </Link>
          </li>
          <li className="header-items"> 
            <Link style={{ textDecoration: "none", color: "black" }} href="/contribute">
              Contribute
            </Link>
          </li>
          <li className="header-items"> 
            <Link style={{ textDecoration: "none", color: "black" }} href="/shareTrip">
              Share Trip
            </Link>
          </li>
          <li className="header-items"><a href="#traverse-footer">Contact</a></li>
        </ul>
      </div>

      <div className="profile">
        <div className="btn-group">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                aaaaa
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
    </>
  );
}
