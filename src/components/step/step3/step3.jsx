import React, { useState } from "react";
import { Button, Card, DatePicker, Input, Slider } from "antd";
import { ReactComponent as Calender } from "./icons/calendar.svg";
import { ReactComponent as India } from "./icons/india.svg";
import { ReactComponent as Downarrow } from "./icons/downarrow.svg";
import { ReactComponent as GPS } from "./icons/gps.svg";


function Step3({ page, setPage }) {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const formatter = (value) => formatCurrency.format(value);
  const formatCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const formatterlol = (value) => {
    return `${value} km`;
  };

  return (
    <>
      <div className="flex ">
        <Card className="w-3/4 mt-8 p-8 border-[1px] border-[#DAE6FF] rounded-[10px] -ml-10">
          <div className="flex items-center">
            <p className="text-[#000000] font-bold text-[16px] leading-[32px]">
              Campaign Settings
            </p>
            <p className="pl-2 text-[#000000] opacity-50 font-medium text-[14px] leading-[32px]">
              (Step 3 of 4)
            </p>
          </div>
          <hr className="w-full h-[1.5px] bg-[#EAEAEA]" />
          <div className="pt-6">
            <div className="flex gap-2">
              <div className="flex flex-col align-center">
                <div className="w-6 h-6 bg-[#0F6EFF] rounded-full text-white-100 text-[12px] pt-1 font-bold text-center">
                  1
                </div>
                <div className="h-[320px] w-[1.5px] bg-black opacity-[0.16] ml-[12px] text-center"></div>
                <div className="w-6 h-6 bg-[#0F6EFF] rounded-full text-white-100 text-[12px] pt-1 font-bold text-center">
                  2
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-black text-[16px] underline font-medium">
                    Budget and dates info
                  </p>
                  <p className="text-[#606060] text-[14px] pt-3 font-medium h-8">
                    Budget Timeline
                  </p>
                  <div
                    className="rounded-[200px] w-fit shadow-md bg-[#F0F0F0] mt-2"
                    onClick={() => setSwitch1(!switch1)}
                  >
                    <button
                      className={`rounded-[200px] w-[120px] h-[39px] text-[14px] font-medium leading-8  border-[1.5px] ${switch1 === true
                          ? "bg-[#0F6EFF] border-[#0F6EFF] text-[#FFFFFF]"
                          : "text-[#999999]"
                        }`}
                    >
                      Lifetime
                    </button>
                    <button
                      className={`rounded-[200px] w-[120px] h-[39px] text-[14px] font-medium leading-8  border-[1.5px] ${switch1 === false
                          ? "bg-[#0F6EFF] border-[#0F6EFF] text-[#FFFFFF]"
                          : "text-[#999999]"
                        }`}
                    >
                      Daily
                    </button>
                  </div>
                  <div className="mt-4 flex gap-[32px]">
                    <div className="flex flex-col">
                      <div className="text-[#606060] text-[14px] font-medium">
                        Start date
                      </div>
                      <div className="pt-2">
                        <DatePicker
                          className="w-[20rem] h-[50px] rounded-[10px] border-[#E9E9E9] border-[1.5px]"
                          suffixIcon=<Calender />
                          allowClear={false}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[#606060] text-[14px] font-medium">
                        End date
                      </div>
                      <div className="pt-2">
                        <DatePicker
                          className="w-[20rem] h-[50px] rounded-[10px] border-[#E9E9E9] border-[1.5px]"
                          suffixIcon=<Calender />
                          allowClear={false}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="text-[#606060] text-[14px] font-medium">
                      Enter Campaign budget
                    </div>
                    <div className="flex items-center gap-2">
                      <India />
                      <p className="text-[11px] text-black font-medium">INR</p>
                      <Downarrow />
                    </div>
                  </div>
                  <div className="mt-2">
                    <Slider defaultValue={2000} tooltip={{ formatter, open: true,placement: "bottom", }} min={100}  max={100000}/>
                  </div>
                  <div className="flex mt-1 justify-between">
                    <p className="text-[#606060] text-[12px] font-medium">100</p>
                    <p className="text-[#606060] text-[12px] font-medium">
                      100000
                    </p>
                  </div>
                </div>
                <div className="mt-[45px]">
                  <p className="text-black text-[16px] underline font-medium">
                    Location info
                  </p>
                  <p className="text-[#606060] text-[14px] pt-3 font-medium h-8">
                    Location type
                  </p>
                  <div
                    className="rounded-[200px] w-fit shadow-md bg-[#F0F0F0] mt-2"
                    onClick={() => setSwitch2(!switch2)}
                  >
                    <button
                      className={`rounded-[200px] w-[120px] h-[39px] text-[14px] font-medium leading-8  border-[1.5px] ${switch2 === true
                          ? "bg-[#0F6EFF] border-[#0F6EFF] text-[#FFFFFF]"
                          : "text-[#999999]"
                        }`}
                    >
                      location
                    </button>
                    <button className={`rounded-[200px] w-[120px] h-[39px] text-[14px] font-medium leading-8  border-[1.5px] ${switch2 === false   ? "bg-[#0F6EFF] border-[#0F6EFF] text-[#FFFFFF]"  : "text-[#999999]"   }`} >  Radius</button>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-col">
                      <div className="text-[#606060] text-[14px] font-medium">
                        Select Location
                      </div>
                      <div className="pt-2">
                        <Input className="w-[100%] h-[50px] rounded-[10px] border-[#E9E9E9] border-[1.5px] text-[16px] font-bold" placeholder="Select a place name, address or coordinates"
                         suffix=<GPS /> />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-[#606060] text-[14px] font-medium">
                      Select target radius
                    </div>
                    <div className="mt-2 mb-2">
                      <Slider
                        defaultValue={24}
                        tooltip={{
                          formatter: formatterlol,
                          open: true,
                          placement: "bottom",
                        }}
                        min={0}
                        max={30}
                      />
                    </div>
                    <div className="flex mt-1 justify-between">
                      <p className="text-[#606060] text-[12px] font-medium">1</p>
                      <p className="text-[#606060] text-[12px] font-medium">30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

      
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <Button onClick={() => (page === 3 ? setPage(0) : setPage(page + 1))} className="mt-16 mr-28 bg-[#0F6EFF] h-12 w-60 absolute right-0 text-white-100 text-[16px] font-medium leading-6 hover-bg-white-100">Continue</Button>
      </div>


    </>
  );
}

export default Step3;
