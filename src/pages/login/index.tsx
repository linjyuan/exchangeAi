import React, { FC, useEffect, useState } from "react";
import { Layout, Avatar, Button, Divider, Input, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { FaWeixin } from "react-icons/fa6";
import { judgeClient } from "./../../utils";
import { ColorfulSpan } from "../../components";
import "./index.css";

interface loginPageProps {}

const { Header, Sider, Content } = Layout;

const LoginPage: FC<loginPageProps> = (props) => {
  const {} = props;
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSaveUser, setIsSaveUser] = useState<boolean>(false);
  const [isPc, setIsPc] = useState<boolean>(false);
  // 判断设备
  useEffect(() => {
    const client = judgeClient();
    setIsPc(client === "PC");
  }, []);
  return (
    <div className="loginPageStyle">
      <div className="loginDiv">
        <div className="LoginLift">
          <div className="projectName">
            <ColorfulSpan
              color="#fff"
              backgroundColor="rgb(45, 190, 250)"
              isTransform={true}
              text="可乐"
            />
            <ColorfulSpan color="" backgroundColor="" text="社区" />
          </div>
        </div>
        <div className="loginRight">
          <div className="projectName">
            <ColorfulSpan
              color="#fff"
              backgroundColor="rgb(45, 190, 250)"
              isTransform={true}
              text="可乐"
            />
            <ColorfulSpan color="" backgroundColor="" text="社区" />
          </div>
          <div className="loginTitle">
            <div className="loginName">
              <div className="loginType">登录</div>
            </div>
            <div className="goRegister">
              <div className="goRegisterTitle">
                没有账号？<span>点击注册</span>
              </div>
            </div>
          </div>
          <div className="getUserDiv">
            <div>
              <Input
                placeholder="邮箱"
                onChange={(value: any) => {
                  setAccount(value);
                }}
              />
            </div>
            <div>
              <Input.Password
                placeholder="请输入密码"
                onChange={(value: any) => {
                  setAccount(value);
                }}
              />
            </div>
          </div>
          <div className="Buttonclick">
            <Button type="primary" size="large" block={true}>
              登录
            </Button>
          </div>
          <div className="checkSave">
            <Checkbox
              checked={isSaveUser}
              onChange={(value: CheckboxChangeEvent) => {
                setIsSaveUser(value.target.checked);
              }}
            >
              记住我
            </Checkbox>
          </div>
          <div className="forgotPassword">
            已有账号，<span>忘记密码</span>
          </div>
          <div className="otherLogin">
            <Divider>其他登录方式</Divider>
            <div>
              {/* 微信 */}
              <FaWeixin color="green" style={{ fontSize: "2rem" }}></FaWeixin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
