import { Card } from "antd";
import React, { useState } from "react";
import { ReactComponent as Tickcircle } from "./icons/tick-circle.svg";
function Step2Rectangle(props) {
  const [check, setCheck] = useState(false);
  return (
    <Card
      className={`h-20 px-2 w-[445px] cursor-pointer rounded-[10px] border-[2px] shadow-lg ${
        check === true ? "border-[#0F6EFF]" : "border-[#F3F3F3]"
      }`}
      onClick={() => setCheck(!check)}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-[17px] items-center">
          <img className="border-[2px] border-[#C4C4C4]" src={props.Source} alt="thumbnail" height="50" width="50" />
          <div className="flex flex-col">
            <p className="text-[16px] font-normal text-[#0B1A33]">
              {props.Title}
            </p>
            <p className="text-[13px] font-normal text-[#000000] opacity-30">
              {props.Description}
            </p>
          </div>
        </div>
        <Tickcircle
          className={`${check === true ? "fill-[#0F6EFF]" : "fill-[#D8D8D8]"}`}
        />
      </div>
    </Card>
  );
}

export default Step2Rectangle;
