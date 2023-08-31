import React, { useEffect, useState, FC } from "react";
import LiftView from "./components/liftView";
import { Button } from "antd";
// 跳转函数
import { useNavigate } from "react-router-dom";
import "./index.css";

interface HomePagePage {}

const HomePage: FC<HomePagePage> = (props) => {
  // 执行 useNavigate 得到跳转函数

  return (
    <div className="homePageStyle">
      <div className="wrapper">
        <LiftView></LiftView>
      </div>
    </div>
  );
};

export default HomePage;
