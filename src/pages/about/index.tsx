import React, { useEffect, useState, FC } from "react";
// import LiftView from "../../components/liftView";
import { Button } from "antd";
// 跳转函数
import { useNavigate } from "react-router-dom";
import "./index.less";

interface AboutPagePage {}

const AboutPage: FC<AboutPagePage> = (props) => {
  // 执行 useNavigate 得到跳转函数
  const navigate = useNavigate();
  const [name, setName] = useState<string>("123");
  const goIndex = () => {
    // 跳转-替换原来路由
    navigate(`/index?name=${name}`, {
      replace: true,
    });
  };

  return (
    <div className="aboutPageStyle">
      {/* <LiftView></LiftView> */}
      <Button onClick={() => goIndex()}>去index</Button>
    </div>
  );
};

export default AboutPage;
