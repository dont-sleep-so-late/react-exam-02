import React, { useState } from "react";
import { Button, Form, Input, Table } from "antd";
import "./User.css";
import { useEffect } from "react";
import { getUser } from "../../api/home";

const User = () => {
  const [tableData, setTableData] = useState([]);
  const [listData, setListData] = useState({});
  const columns = [
    {
      title: "身份ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "主要技能",
      dataIndex: "skills",
      key: "skills",
    },
    {
      title: "居住地",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "操作",
      render: (text, record) => (
        <div className="flex-box">
          <Button type="primary" onClick={handleClick("edit")}>
            编辑
          </Button>
          <Button type="primary" danger onClick={handleClick("edit")}>
            删除
          </Button>
        </div>
      ),
    },
  ];
  const handleClick = () => {
    // 处理点击事件
  };

  const handleFinish = (e) => {
    // 处理表单提交事件
    setListData({
      name: e.name,
    });
  };

  const getTableData = async () => {
    // 获取表格数据
    getUser().then(({ data }) => {
      setTableData(data);
    });
  };

  useEffect(() => {
    // 页面加载时执行的函数
    getTableData();
  }, []);

  return (
    <div className="user">
      <div className="flex-box">
        <Button type="primary" onClick={handleClick("add")}>
          新增
        </Button>
        <Form layout="inline" onFinish={handleFinish}>
          <Form.Item name="username">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table dataSource={tableData} columns={columns} rowKey={"id"} />;
    </div>
  );
};

export default User;
