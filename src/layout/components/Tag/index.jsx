import React, { useState } from "react";
import { Tag, Tooltip, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

const { CheckableTag } = Tag;

const TagItem = () => {
  const handleClose = () => {};

  return (
    <Space className="tag" size={(0, 8)} wrap>
      <Tag >首页</Tag>
      <Tag
        color="#55ac"
        closeIcon
        onClose={() => {
          handleClose();
        }}
      >
        用户管理
      </Tag>
    </Space>
  );
};

export default TagItem;
