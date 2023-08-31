// 1、引入一个方法和一个组件
// createBrowserRouter-创建路由实例，在方法中定于路由path和组件的对应关系
// RouterProvider 作为一个组件渲染并传入 createBrowserRouter 执行之后生成的 router 实例
import { createBrowserRouter, createHashRouter } from "react-router-dom";

// createBrowserRouter ->history模式路由
// history模式路由,ie10,兼容性差，需要后端支撑

// createHashRouter ->hash模式路由
// 不需要后端支持、兼容到ie8

// 导入页面实例
import HomePage from "../pages/home/index";
import IndexPages from "../pages/index";
import AboutPage from "../pages/about";
import LoginPage from "../pages/login";

// 2、调用creater方法生成实例
const router = createHashRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/index",
    element: <IndexPages />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
