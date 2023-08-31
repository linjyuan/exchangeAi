import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 1、引入一个方法和一个组件
// createBrowserRouter-创建路由实例，在方法中定于路由path和组件的对应关系
// RouterProvider 作为一个组件渲染并传入 createBrowserRouter 执行之后生成的 router 实例
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App />
     */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
