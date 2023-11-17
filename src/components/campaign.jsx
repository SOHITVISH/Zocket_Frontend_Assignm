import { Button, Card } from "antd";
import { Input } from "antd";
import React, { useState,useEffect } from "react";
import { ReactComponent as Searchicon } from "../utils/icons/search.svg";
import CampaignTable from "../utils/table/table";
import dataSource from "../utils/table/campaignData";
import AddCampaign from "./addCampaign";
const Campaign = () => {
  const [campaignSteps,setCampaignSteps] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("All Platform");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedDays, setSelectedDays] = useState("Last 30 days");
  const [data, setData] = useState(dataSource);
  const [filteredData, setFilteredData] = useState(data);

  const handleChangePlatform = (val) => {
    setSelectedPlatform(val);

    if (val === "all platform") {
      setFilteredData(dataSource);
      return;
    }

    setFilteredData(
      dataSource.filter((data) => data.platform.toLowerCase() === val)
    );
  };

  const handleChangeStatus = (val) => {
    setSelectedStatus(val);

    if (val === "all status") {
      setFilteredData(dataSource);
      return;
    }

    setFilteredData(
      dataSource.filter((data) => data.status.toLowerCase() === val)
    );
  };

  const handleDeleteCampaign = (id) => {
    const updatedData = data.filter((item) => item.key !== id);
    setData(updatedData);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleChangeQuery = (e) => {
    const query = e.target.value;

    if (!query) {
      setFilteredData(dataSource);
      return;
    }

    setFilteredData(
      filteredData.filter((data) =>
        data.campaign.title.toLowerCase().includes(query)
      )
    );
  };
  const sohit = (key, checked) => {
   
    const updatedData = data.map((item) => {
      if (item.key === key) {
        return {
                          ...item,
                        toggle: checked, 
        };
      }
                return item;
    });
  
 
    setData(updatedData);
  
  };
  return (
    (
      campaignSteps===false?(
    <div className="mx-20 pt-8">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-black font-bold text-2xl !leading-8">
            Your Campaigns
          </div>
          <div className="text-[#000000] opacity-50 font-normal text-[16px] leading-8">
            Check the list of campaigns you created{" "}
          </div>
        </div>
        <Button
          className="bg-[#0F6EFF] flex items-center px-10 h-[50px] text-white-100 rounded-[10px]"
          onClick={() => setCampaignSteps(!campaignSteps)}
        >
          <img
            alt="plus-circle"
            src="/icons/plus-circle.svg"
            height={20}
            width={30}
            className="mr-3"
          />
          <p className="font-medium text-xl"> Create Campaign</p>
        </Button>
      </div>

      <Card className="mt-8 border-1 border-[#DAE6FF] rounded-10">
        <div className="p-6 flex justify-between items-center">
          <Input
            prefix={<Searchicon />}
            placeholder="Search for Campaign"
            className="font-normal text-[16px] leading-8 border-[1.5px]  border-[#E9E9E9] w-80 text-[#000000]"
            onChange={(e) => handleChangeQuery(e)}
          />
          <div className="flex items-center">
            <div className="flex items-center pr-4">
              <div className="font-normal text-[16px] leading-8 text-[#000000] opacity-50 pr-2">
                Platform:
              </div>
              <select
                value={selectedPlatform}
                onChange={(e) => handleChangePlatform(e.target.value)}
                className="font-normal text-[16px] leading-8 border-[1.5px] rounded-[10px] border-[#E9E9E9] bg-[#FFFFFF] h-[50px] w-[138px] px-1 text-[#000000]"
              >
                <option value="all platform">All Platform</option>
                <option value="google">Google</option>
                <option value="fb">FB</option>
                <option value="youtube">Youtube</option>
                <option value="instagram">Instagram</option>
              </select>
            </div>
            <div className="flex items-center pr-4">
              <div className="font-normal text-[16px] leading-8 text-[#000000] opacity-50 pr-2">
                Status:
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => handleChangeStatus(e.target.value)}
                className="font-normal text-[16px] leading-8 border-[1.5px] rounded-[10px] border-[#E9E9E9] bg-[#FFFFFF] h-[50px] w-[138px] px-1 text-[#000000]"
              >
                <option value="all status">All Status</option>
                <option value="live">Live Now</option>
                <option value="paused">Paused</option>
                <option value="exhausted">Exhausted</option>
              </select>
            </div>
            <select
              value={selectedDays}
              onChange={(e) => setSelectedDays(e.target.value)}
              className="font-normal text-[16px] leading-8 border-[1.5px] rounded-[10px] border-[#E9E9E9] bg-[#FFFFFF] h-[50px] w-[138px] px-1 text-[#000000]"
            >
              <option value="30 days">Last 30 days</option>
              <option value="15 days">Last 15 days</option>
            </select>
          </div>
        </div>

        <CampaignTable
          dataSource={filteredData}
          handleDeleteCampaign={handleDeleteCampaign}
        />
      </Card>
    </div>
    ):
    (<AddCampaign campaignSteps={campaignSteps} setCampaignSteps={setCampaignSteps}/>)
    )
  );
};

export default Campaign;