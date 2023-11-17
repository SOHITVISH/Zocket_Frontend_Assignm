import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center bg-white py-4 border-b-[1px] border-[#DAE6FF] mr-10">
      <div className="flex items-center">
        <img className="px-4" src="/assets/buyplan.svg" alt="buyplan" />
        <img className="px-4" src="/assets/notification.svg" alt="notification" />
        <div className="flex items-center"> 
          <img className="px-4" src="/assets/name.svg" alt="name" />
          <div className="flex items-center">
            Mukund Cake Shop
            <span className="ml-1 text-xs">&#9660;</span> 
          </div>
        </div>
        <img className="px-4" src="/assets/translate.svg" alt="translate" />
      </div>
    </div>
  );
}
