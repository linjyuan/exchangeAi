import React, { useEffect, useState, FC } from "react";
// 1、导入 useSearchParams 函数
import { useSearchParams } from "react-router-dom";
import "./index.less";
interface IndexPagesPropos {}

const IndexPages: FC<IndexPagesPropos> = (props) => {
  const [name, setName] = useState<any>("");
  // 2、获取通过 useSearchParams 传参过来的name参数
  const [params] = useSearchParams();
  useEffect(() => {
    // 3、获取参数，params.get 后面是参数名称
    if (params.get("name")) setName(params.get("name"));
  }, []);
  return <div className="indexPageStyle">这是第一个页面,姓名:{name}</div>;
};
export default IndexPages;
