import React from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: "/icons/home_inactive.svg",
    },
    {
      path: "/campaign",
      name: "Campaign",
      icon: "/icons/campaign.svg",
    },
    {
      path: "/products",
      name: "Products",
      icon: "/icons/products_inactive.svg",
    },
    {
      path: "/customers",
      name: "Customers",
      icon: "/icons/customer_inactive.svg",
    },
  ];
  return (
    <div className="container flex top-0 left-0 fixed">



      <div className=" h-[100vh] w-[150px]  bg-[#001738]">



        <div className="flex flex-col items-center">
            <div onClick={()=>navigate('/')} className="pt-[46px] cursor-pointer"><img height={70} width={70} src="/icons/logo.svg" alt="logo" /></div>
            <div className="pt-[50px] w-full">
            {
                   menuItem.map((item,
                     index)=>(
                    
                       <NavLink to={item.path} key={index} className={({ isActive }) =>
                       isActive ? "pt-5 flex flex-col items-center  border-[#0F6EFF] border-l-8 bg-[#01214A]" : "pt-5 flex flex-col items-center"   // also you can use a external file (cssfile.sohit)
                     }>
                           <img className="pb-2" alt="icon" height={30} width={30} src={item.icon}/>
                            <p className="pb-5 text-white-100 font-medium text-base">{item.name}</p>
                        </NavLink>
                   ))
                  
            }
          
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
