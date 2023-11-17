import React, { useState } from "react";
import { ReactComponent as Tickcircle } from "./icons/tick-circle.svg";
import { Card, Badge, Avatar } from "antd";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { ReactComponent as Like } from "./icons/like-button.svg";
// index.js or App.js



function Step4Rectangle(props) {
  const [check, setCheck] = useState(false);
  const [like, setLike] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Badge count={check ? <Tickcircle className="fill-[#0F6EFF]" /> : 0}>
      <Card
        className={`w-[330px] justify-center px-4 cursor-pointer rounded-[10px] border-[2px] shadow-lg ${
          check === true ? "border-[#0F6EFF]" : "border-[#F3F3F3]"
        }`}
        onClick={() => setCheck(!check)}
      >
        <div className="flex gap-[17px] items-center">
          <Avatar
            shape="circle"
            src="https://media.licdn.com/dms/image/C5603AQGNjU9U9EwG6g/profile-displayphoto-shrink_800_800/0/1625317021720?e=1705536000&v=beta&t=03DeN30vqYtIDAp8nbe-lz3Y-uWTOZZ_G2izQ4UsJCk"
            alt="thumbnail"
            size="large"
          />
          
          <div className="flex flex-col">
            <p className="text-[16px] font-normal text-[#2B23A5] h-6">
              {props.Title}
            </p>
            <p className="text-[10px] font-normal text-[#767676]">Sponsored</p>
       
          </div>
          <i className="fas fa-globe"></i> {/* Earth Icon */}
        </div>
        <div className="mt-[10px] w-[250px] text-[14px] font-normal text-[#000000]">
          We are the best bakery around you. Please like my page to get updates on exciting offers and discounts
        </div>
        {image ? (
          <img className="mt-3" src={image} alt="uploaded" height={147} width={250} />
        ) : (
          <img className="mt-3" src={props.Source} alt="thumbnail" height={147} width={250} />
        )}

    

        <Card className="w-[242px] p-2 bg-[#F5F5F5] shadow-md" bodyStyle={{ padding: "0" }}>
          <div className="flex justify-between items-center">
            <p className="text-[11px] font-normal text-[#2B23A5]">{props.Title}</p>
            <div onClick={() => { setLike(!like); }} className="w-[60px] px-1 border-[1px] rounded-none h-5 border-[#CED0D4] bg-[#F6F7F9]">
              <p className="flex justify-between items-center">
                <Like className={`${like === true ? 'fill-[#0F6EFF]' : 'fill-[#4B4F56]'}`} />
                <div className="text-1">Like</div>
              </p>
            </div>
          </div>
        </Card>
        <div className={`${check === true ? 'visible' : 'hidden'} mt-4`}>
          <div className="flex gap-[15px]">
          <label htmlFor="imageUpload" className="text-[#0F6EFF] w-[125px] h-[34px] rounded-[5px] p-2 bg-[#cddbf2d9] font-medium text-[12px] text-center cursor-pointer">
          Change Image
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
            <div
              className="text-[#0F6EFF] w-[125px] h-[34px] rounded-[5px] p-2 bg-[#cddbf2d9] font-medium text-[12px] text-center"
            >
              Edit Text
            </div>
          </div>
        </div>
      </Card>
    </Badge>
  );
}

export default Step4Rectangle;


// at 67% screen ratio it works best 