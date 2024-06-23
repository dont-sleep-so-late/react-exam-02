import React, { useState } from "react";
import { Button } from "antd";

const UserSettings = () => {
  const handleClick = () => {
    // 处理点击事件
  };

  return (
    <div className="user">
      <div className="flex-box">
        <Button type="primary" onClick={handleClick("add")}>
          新增
        </Button>
      </div>
    </div>
  );
};

export default UserSettings;
