import { Card, Badge } from "antd";
import React, { useState } from "react";
import { ReactComponent as Tickcircle } from "./icons/tick-circle.svg";
function Step1Rectangle(props) {
  const [check, setCheck] = useState(false);
  return (
      <Badge count={check ? <Tickcircle className="fill-[#0F6EFF]" /> : 0}>
        <Card
          className={`h-20 px-2 w-[445px] cursor-pointer rounded-[10px] border-[2px] shadow-lg ${
            check === true ? "border-[#0F6EFF]" : "border-[#F3F3F3]"
          }`}
          onClick={() => setCheck(!check)}
        >
          <div className="flex gap-[17px] items-center">
            <props.Icon
              className={`${
                check === true ? "fill-[#0F6EFF]" : "fill-[#8B8B8B]"
              }`}
            />
            <div className="flex flex-col">
              <p className="text-[16px] font-normal text-[#0B1A33]">
                {props.Title}
              </p>
              <p className="text-[13px] font-normal text-[#000000] opacity-30">
                {props.Description}
              </p>
            </div>
          </div>
        </Card>
      </Badge>
  );
}

export default Step1Rectangle;
