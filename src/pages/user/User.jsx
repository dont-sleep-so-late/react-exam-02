import React, { useState } from "react";
import { Button, Form, Input, Table, Popconfirm, Modal, message } from "antd";
import "./User.css";
import { useEffect } from "react";
import { getUser, addUser, updateUser, deleteUser } from "../../api/home";

const User = () => {
  const [tableData, setTableData] = useState([]);
  const [total, setTotal] = useState(0);
  const [listData, setListData] = useState({
    name: "",
  });
  const [modalType, setModalType] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

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
      render: (rowData) => (
        <div className="flex-box">
          <Button
            type="primary"
            onClick={() => {
              handleClick("edit", rowData);
            }}
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除吗？"
            onConfirm={() => handleDelete(rowData)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleClick = (type, data) => {
    setIsModalOpen(true);
    // 处理点击事件
    if (type == "add") {
      setModalType(0);
    } else {
      setModalType(1);
      //表单数据回填
      form.setFieldsValue(data);
    }
  };

  const handleDelete = (data) => {
    // 处理删除事件
    deleteUser(data).then((res) => {
      handleCancel();
      getTableData();
    });
  };

  const handleFinish = (e) => {
    // 处理表单提交事件
    setListData({
      name: e.username,
    });
  };

  useEffect(() => {
    getTableData();
  }, [listData]);

  const getTableData = async () => {
    // 获取表格数据
    getUser(listData).then((res) => {
      setTableData(res.data);
      setTotal(res.total);
    });
  };

  const handleOK = () => {
    // 处理确定按钮点击事件
    form
      .validateFields()
      .then((values) => {
        setIsModalOpen(false);
        if (modalType) {
          //编辑
          updateUser(values).then((res) => {
            handleCancel();
            getTableData();
          });
        } else {
          // 新增
          addUser(values).then((res) => {
            handleCancel();
            getTableData();
          });
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    // 处理取消按钮点击事件
    setIsModalOpen(false);
    form.resetFields();
  };

  useEffect(() => {
    // 页面加载时执行的函数
    getTableData();
  }, []);
  const changePage = (page, pageSize) => {
    // 处理分页变化事件
  };
  return (
    <div className="user">
      <div className="flex-box">
        <Button
          type="primary"
          onClick={() => {
            handleClick("add");
          }}
        >
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
      <Table
        dataSource={tableData}
        columns={columns}
        rowKey={"id"}
        pagination={{
          total: total,
          showSizeChanger: true,
          onChange: (current, pageSize) => {
            setListData({
              page: current,
              limit: pageSize,
            });
          },
          pageSizeOptions: [10, 20, 50, 100],
          showTotal: (total) => `共 ${total} 条`,
          defaultPageSize: 10,
        }}
      />

      <Modal
        title={modalType ? "编辑用户" : "新增用户"}
        open={isModalOpen}
        onOk={handleOK}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
        maskClosable={false}
        className="user-modal"
      >
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleFinish}
        >
          {modalType ? (
            <Form.Item label="身份ID" name="id">
              <Input disabled />
            </Form.Item>
          ) : null}
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            label="角色"
            name="role"
            rules={[{ required: true, message: "请输入角色" }]}
          >
            <Input placeholder="请输入角色" />
          </Form.Item>
          <Form.Item
            label="主要技能"
            name="skills"
            rules={[{ required: true, message: "请输入主要技能" }]}
          >
            <Input placeholder="请输入主要技能" />
          </Form.Item>
          <Form.Item
            label="居住地"
            name="region"
            rules={[{ required: true, message: "请输入居住地" }]}
          >
            <Input placeholder="请输入居住地" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default User;
