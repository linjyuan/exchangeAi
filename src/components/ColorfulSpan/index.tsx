import React, { FC, useEffect, useState } from "react";
import "./index.css";

interface ColorfulSpanProps {
  color: string;
  backgroundColor: string;
  text: string;
  isTransform?: boolean;
}
const ColorfulSpan: FC<ColorfulSpanProps> = (props) => {
  const { color, backgroundColor, text, isTransform = false } = props;
  const [name, setName] = useState<string>("");
  const [textList, setTextList] = useState<string[]>([]);
  useEffect(() => {
    if (text) setTextList([...text]);
  }, [text]);
  return (
    <span className="colorfulSpanStyle">
      {textList?.map((item, index) => (
        <div
          key={index}
          style={{
            color,
            backgroundColor,
            // transform: `rotate(${index * 45}deg)}`,
            transform: `${index === 1 && isTransform ? "rotate(45deg)" : ""}`,
          }}
          className="colorfulSpan"
        >
          {item}
        </div>
      ))}
    </span>
  );
};

export default ColorfulSpan;
