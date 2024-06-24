import React from "react";
import "./index.css";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Tag from "./components/Tag";
import { useSelector } from "react-redux";
import { RouterAuth } from "../router/routerAuth";

const App = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const collapsed = useSelector((state) => state.tab.isCollapsed);

  return (
    <RouterAuth>
      <Layout style={{ minHeight: "100vh" }}>
        <Aside collapsed={collapsed} />
        <Layout
          style={{ marginLeft: collapsed ? 80 : 200, transition: "all 0.5s" }}
        >
          <Nav collapsed={collapsed} />
          <Tag />
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
    </RouterAuth>
  );
};
export default App;
