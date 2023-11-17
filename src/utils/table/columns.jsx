import React from "react";
import { Checkbox, Switch, Tag } from "antd";
import { ReactComponent as TrashIcon } from "./trash.svg";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Google } from "./google.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Youtube } from "./youtube.svg";

const statusHash = {
  live: {
    key: "Live Now",
    color: "green",
  },
  exhausted: {
    key: "Exhausted",
    color: "red",
  },
  paused: { key: "Paused", color: "yellow" },
};

const platformHash = {
  google: { icon: <Google /> },
  facebook: {
    icon: <Facebook />,
  },
  youtube: {
    icon: <Youtube />,
  },
};

const Columns = ({ handleDeleteCampaign }) => [
  {
    title: (
      <Checkbox style={{ borderRadius: "3px", border: "1px solid #B3B3B3;" }} />
    ),
    key: "checkbox",
    render: (_, record) => (
      <Checkbox style={{ borderRadius: "3px", border: "1px solid #B3B3B3;" }} />
    ),
  },
  {
    title: "On/Off",
    key: "toggle",
    render: (_, record) => (
      <div>
        <Switch  defaultChecked={record.toggle}   className="bg-[#DADEE3]"/>
      </div>
    ),
  },
  {
    title: "Campaign",
    key: "campaign",
    render: (_, record) => (
      <div style={{ display: "flex", gap: "8px" }}>
        <span>
          <img
            src={record.campaign.imgLink}
            height="50"
            width="50"
            alt=""
            style={{ borderRadius: "5px" }}
          />
        </span>
        <span style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize:"14px",fontWeight: "500",color:"#000000",fontStyle:"normal" }}>{record.campaign.title}</div>
          <div style={{ fontSize: "12px",fontWeight: "400",color:"#000000",opacity:"0.60",fontStyle:"normal" }}>{record.campaign.createdOn}</div>
        </span>
      </div>
    ),
  },
  {
    title: "Date Range",
    key: "dateRange",
    render: (_, record) => <div>{record.dateRange}</div>,
  },
  {
    title: "Clicks",
    key: "clicks",
    render: (_, record) => <div>{record.clicks}</div>,
  },
  {
    title: "Budget",
    key: "budget",
    render: (_, record) => <div>INR. {record.budget}</div>,
  },
  {
    title: "Location",
    key: "location",
    render: (_, record) => <div>{record.location}</div>,
  },
  {
    title: "Platform",
    key: "platform",
    render: (_, record) => <div>{platformHash[record.platform].icon}</div>,
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <Tag
        color={statusHash[record.status].color}
        style={{ borderRadius: "24px" }}
      >
        {statusHash[record.status].key}
      </Tag>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <div style={{ display: "flex", gap: "8px" }}>
        <Edit />
        <TrashIcon onClick={() => handleDeleteCampaign(record.key)} 
         style={{ cursor: "pointer" }}
        />
      </div>
    ),
  },
];

export default Columns;