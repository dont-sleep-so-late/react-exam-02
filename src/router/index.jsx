import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/index";
// import Main from "../pages/main";
import Home from "../pages/home/Home";
import Mail from "../pages/mail/Mail";
import User from "../pages/user/User";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        title: "首页",
        Component: Home,
      },
      {
        path: "mail",
        title: "邮件",
        Component: Mail,
      },
      {
        path: "user",
        title: "用户",
        Component: User,
      },
    ],
  },
];

export default createBrowserRouter(routes);
