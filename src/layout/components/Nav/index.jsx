import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;
import { Button, Layout, Avatar, Dropdown, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.css";
import { useDispatch } from "react-redux";
import { changeCollapse } from "../../../store/reducers/tab";

const Nav = ({ collapsed }) => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            navigate("/userSettings");
          }}
        >
          个人中心
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          退出登录
        </a>
      ),
    },
  ];

  const dispatch = useDispatch();
  const changeCollapsed = () => {
    dispatch(changeCollapse());
  };

  return (
    <Header className="header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
        onClick={changeCollapsed}
      />
      <div className="right-menu">
        <Dropdown menu={{ items }}>
          <Avatar
            className="logo"
            size={48}
            src={<img src={require("../../../assets/images/47170023.png")} />}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default Nav;
