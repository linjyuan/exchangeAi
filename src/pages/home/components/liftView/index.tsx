import React, { FC, useEffect, useState } from "react";
import { Layout, Avatar, Popover, Image } from "antd";
import { UserOutlined, WechatFilled } from "@ant-design/icons";
import { judgeClient } from "../../../../utils";
import "./index.css";
import { AiFillGithub, AiFillYuque } from "react-icons/ai";
import { FaBilibili, FaWeixin } from "react-icons/fa6";

interface LiftViewProps {}

// 左边
const { Header, Content, Footer, Sider } = Layout;
const LiftView = (props: LiftViewProps) => {
  // const [name, setName] = useState<string>("");
  const client = judgeClient();
  const isPc = () => client === "PC";

  const menuList = [
    {
      name: "",
      desc: "哔哩哔哩",
      icon: <FaBilibili></FaBilibili>,
      handler: () => {
        window.open("https://space.bilibili.com/146719540", "_blank");
      },
    },
    {
      name: "项目文档",
      desc: "语雀",
      icon: <AiFillYuque></AiFillYuque>,
      handler: () => {
        window.open(
          "https://www.yuque.com/snab/planet/cef1mcko4fve0ur3",
          "_blank"
        );
      },
    },
    // {
    //   name: "618超优惠",
    //   desc: "腾讯云",
    //   icon: "qcloud",
    //   handler: () => {
    //     window.open("https://curl.qcloud.com/qSaH0JLT", "_blank");
    //   },
    // },
    {
      name: "后端源码",
      desc: "MallChatWeb Server",
      icon: <AiFillGithub></AiFillGithub>,
      handler: () => {
        window.open("https://github.com/zongzibinbin/MallChat", "_blank");
      },
    },
    {
      name: "前端源码",
      desc: "MallChatWeb Web",
      icon: <AiFillGithub></AiFillGithub>,
      handler: () => {
        window.open("https://github.com/Evansy/MallChatWeb", "_blank");
      },
    },
  ];

  return (
    <div className="liftViewStyle">
      <div className="sideToolbar">
        <Avatar size={isPc() ? 50 : 40} icon={<UserOutlined />}></Avatar>
        <div className="menu">
          <Popover
            placement="right"
            content={
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              ></Image>
            }
          >
            <Avatar
              shape="square"
              size={isPc() ? 50 : 40}
              icon={<FaWeixin></FaWeixin>}
            ></Avatar>
          </Popover>
          {menuList?.map((item) => {
            return (
              <a onClick={item?.handler} className="menuItem">
                <Avatar
                  shape="square"
                  key={item?.desc}
                  size={isPc() ? 50 : 40}
                  icon={item?.icon}
                ></Avatar>
                <span className="menuItemName">{item?.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LiftView;
