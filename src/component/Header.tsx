import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const LayoutHeader = () => {
  const items: MenuProps["items"] = [
    {
      label: <Link to={"/"}>首页</Link>,
      key: "mail",
    },
    {
      label: <Link to={"about"}>关于</Link>,
      key: "app",
    },
    {
      label: <Link to={"profile"}>用户</Link>,
      key: "user",
    },
  ];
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default LayoutHeader;
