import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../../api/user/index";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { data } = await login(values);
    if (data.code === 200) {
      message.success("登录成功");
      history.push("/");
    } else {
      message.error("登录失败");
    }
  };
  return (
      <div className="login-container">
          <div className="login-box">
              <div className="login-title">登录</div>
              <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
              ></Form>
              <Form.Item
                  name="username"
                  rules={[{ required: true, message: "请输入用户名!" }]}
              >
                  <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="用户名"
                  />
              </Form.Item>
              

          </div>
    </div>
  );
};
export default Login;
