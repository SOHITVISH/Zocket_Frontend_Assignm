import React from 'react'
import { Button, Card } from 'antd';
import data from './data';
import Step4Rectangle from "./step4Rectangle";
import { useNavigate } from "react-router-dom";
function Step4({campaignSteps,setCampaignSteps}) {
  let navigate = useNavigate();
  return (
    <>
      <Card className="mt-8 p-8 border-[1px] border-[#DAE6FF] rounded-[10px]">
        <div className="flex items-center">
          <p className="text-[#000000] font-bold text-[16px] leading-[32px]">
          Ready to go
          </p>
          <p className="pl-2 text-[#000000] opacity-50 font-medium text-[14px] leading-[32px]">
            (Step 4 of 4)
          </p>
        </div>
        <hr className="w-[100%] h-[1.5px] bg-[#EAEAEA]" />
        <div className="pt-6">
          <div className="flex flex-wrap gap-[20px]">
            {data.map((value, index) => {
              return (
                <Step4Rectangle
                  Source={value.imgLink}
                  Title={value.title}
                  Description={value.description}
                />
              );
            })}
          </div>
        </div>
      </Card>
      <Button onClick={()=>setCampaignSteps(!campaignSteps)} className="mt-6 bg-[#0F6EFF] h-[50px] w-60  left-[1184px] relative text-white-100 text-[16px] font-medium leading-6 hover:bg-white-100">Start Campaign</Button>
      
    </>
  )
}

export default Step4;


/* // Path: src/components/step/step4/step4Rectangle.jsx
//dont use snippet use customise hooks .
// use react arrow funtion componenet instead of using other funtional or class comp. */