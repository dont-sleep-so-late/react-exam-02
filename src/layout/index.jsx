import React, { useState } from "react";
import "./index.css";

import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content } = Layout;
import Aside from "./components/Aside/index";
import Nav from "./components/Nav/index";

const App = () => {
  // const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Aside />
      <Layout>
        <Nav />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
