import React, { useEffect, useState } from "react";
import { Row, Col, Card, Avatar, Table } from "antd";
import * as Icon from "@ant-design/icons";
import * as echarts from "echarts";

import "./Home.css";
import { getData } from "../../api/home/index";

const list = [
  {
    key: "1",
    name: "John Doe",
    role: "Software Engineer",
    icon: "WechatOutlined",
  },
  {
    key: "2",
    name: "John Doe",
    role: "Software Engineer",
    icon: "TaobaoCircleOutlined",
  },
  {
    key: "3",
    name: "John Doe",
    role: "Software Engineer",
    icon: "AlipayCircleOutlined",
  },
  {
    key: "4",
    name: "John Doe",
    role: "Software Engineer",
    icon: "GithubOutlined",
  },
  {
    key: "5",
    name: "John Doe",
    role: "Software Engineer",
    icon: "WeiboCircleOutlined",
  },
  {
    key: "6",
    name: "John Doe",
    role: "Software Engineer",
    icon: "QqOutlined",
  },
];
//动态获取icon
const getIconElement = (name) => React.createElement(Icon[name]);

const Home = () => {
  const [dataSource, setDataSource] = useState([]);
  const columns = [
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
  ];
  useEffect(() => {
    getData().then(({ data }) => {
      setDataSource(data);
    });
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      title: {},
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }, []);
  return (
    <Row className="home" gutter={2}>
      <Col span={8} className="left">
        <Card hoverable>
          <div className="user">
            <Avatar
              src={require("../../assets/images/47170023.png")}
              size={100}
            />
            <div className="user-info">
              <h2 className="user-name">John Doe</h2>
              <p className="user-title">Software Engineer</p>
            </div>
          </div>
          <div className="user-login-info">
            <p>
              <span>Last Login: </span>
              <span>2022-01-01</span>
            </p>
            <p>
              <span>Location:</span>
              <span> New York, USA</span>
            </p>
          </div>
        </Card>
        <Card hoverable style={{ marginTop: "5px" }}>
          <Table
            rowKey={"id"}
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </Card>
      </Col>
      <Col span={16}>
        <div className="num">
          {list.map((item, index) => {
            return (
              <Card key={index} className="Card" hoverable>
                <div className="card-item">
                  <div className="icon-box">{getIconElement(item.icon)}</div>
                  <div className="num-info">
                    <p className="num-title">{item.name}</p>
                    <p className="num-count">{item.role}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div id="main" style={{ width: "100%", height: "300px" }}></div>
      </Col>
    </Row>
  );
};

export default Home;
