import { Steps } from "antd";
import { ReactComponent as Campaignsettings } from "../utils/icons/campaignSettings.svg";

import { ReactComponent as Lamp } from "../utils/icons/lamp-charge.svg";
import { ReactComponent as Tickcircle } from "../utils/icons/tick-circle.svg";
import { Step1,Step2,Step3,Step4 } from "./step/index.js";


import { ReactComponent as Bag } from "../utils/icons/bag.svg";




import React, { useState } from "react";
const AddCampaign = ({campaignSteps,setCampaignSteps}) => {
  const [page, setPage] = useState(0);
  function displayPage(){
    if(page === 0) return <Step1 page={page} setPage={setPage}/>;


          else if(page === 1) return <Step2 page={page} setPage={setPage}/>;


    else if(page === 2) return <Step3 page={page} setPage={setPage}/>;
           else if(page === 3) return <Step4 campaignSteps={campaignSteps} setCampaignSteps={setCampaignSteps}/>;
  }
  return (
    //either you can create a container and that container contains divs
    <div className="mx-20 p-8">
      <div>
        <div className="text-black font-bold text-2xl !leading-8">
          Your Ad Campaign
        </div>
        <div className="text-[#000000] opacity-50 font-normal text-[16px] leading-8">
          Launch your ad in just 4 easy steps
        </div>
      </div>

      <div className="pt-14 mr-12">
        <Steps




          className="custome-step"



                            
                              labelPlacement="vertical"
          current={page}

          items={[
            {
              title: "What you want to do",
              icon: (
                <div
                  className={`rounded-full h-[62px] w-[62px] flex items-center justify-center ${
                    page >= 0 ? "bg-[#FFB963]" : "bg-[#EAEAF2]"
                  }`}
                >
                  <Lamp
                    className={`${
                      page >= 0 ? "fill-white-100" : "fill-[#ABB5C2]"
                    }`}
                  />
                             
                  
                  
                  
                  </div>
              ),
            },
            {
              title: "Choose Product",
              icon: (
                <div
                  className={`ml-[-10px] rounded-full h-[62px] w-[62px] flex items-center justify-center ${
                    page >= 1 ? "bg-[#FFB963]" : "bg-[#EAEAF2]"
                  }`}
                >
                  <Bag
                    className={`${
                      page >= 1 ? "fill-white-100" : "fill-[#ABB5C2]"
                    }`}
                  />
                </div>
              ),
            },
            {
              title: "Campaign Settings",
              icon: (
                <div
                  className={`ml-[-10px] rounded-full h-[62px] w-[62px] flex items-center justify-center ${
                    page >= 2 ? "bg-[#FFB963]" : "bg-[#EAEAF2]"
                  }`}
                >
                  <Campaignsettings
                    className={`${
                      page >= 2 ? "fill-white-100" : "fill-[#ABB5C2]"
                    }`}
                  />
                </div>
              ),
            },
            {
              title: "Ready to go",
              icon: (
                <div
                  className={`ml-[-25px] rounded-full h-[62px] w-[62px] flex items-center justify-center ${
                    page >= 3 ? "bg-[#FFB963]" : "bg-[#EAEAF2]"
                  }`}
                >
                  <Tickcircle
                    className={`${
                      page >= 3 ? "fill-white-100" : "fill-[#ABB5C2]"
                    }`}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
     {
      displayPage()
     }
     
    </div>
  );
};

export default AddCampaign;
