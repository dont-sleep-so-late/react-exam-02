import React from "react";
import "./index.css";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Tag from "./components/Tag";
import { useSelector } from "react-redux";

const App = () => {
  // const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const collapsed = useSelector((state) => state.tab.isCollapsed);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Aside collapsed={collapsed} />
      <Layout>
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
  );
};
export default App;
