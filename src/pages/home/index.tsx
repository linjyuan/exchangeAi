import React, { useEffect, useState, FC } from "react";

import "./index.less";

interface HomePagePage {}

const HomePage: FC<HomePagePage> = (props) => {
  // console.log({ styles });

  const [name, setName] = useState<string>("");

  return <div className="homePageStyle">sss</div>;
};

export default HomePage;
