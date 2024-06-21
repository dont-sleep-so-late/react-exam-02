import React from "react";
const { Header } = Layout;
import { Button, Layout, Avatar } from "antd";

const Nav = () => {
  return (
    <Header style={{ padding: 0, background: "#fff" }}>
      <Button
        type="text"
        // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        // onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Avatar
        src={<img src={require("../../../assets/images/47170023.png")} />}
      />
    </Header>
  );
};

export default Nav;
