import React, { useState } from "react";
import MenuConfig from "../../../config/index";
import * as Icon from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

//动态获取icon
const getIcon = (name) => React.createElement(Icon[name]);

//处理菜单数据
const items = MenuConfig.map((icon) => {
  console.log(icon);
  //没有子菜单
  const child = {
    key: icon.path,
    icon: getIcon(icon.icon),
    label: icon.label,
  };
  //有子菜单
  if (icon.children) {
    child.children = icon.children.map((item) => {
      return {
        key: item.path,
        label: item.label,
      };
    });
  }
  return child;
});

const Aside = ({ collapsed }) => {
  const navigate = useNavigate();
  //点击菜单
  const selectMenu = (e) => {
    navigate(e.key);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h1 className="app-name">{collapsed ? "你好" : "你别睡这么晚"}</h1>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        onClick={selectMenu}
      />
    </Sider>
  );
};

export default Aside;
