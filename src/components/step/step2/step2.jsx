import React from 'react'
import { Button, Card } from 'antd';
import data from './data';
import Step2Rectangle from "./step2Rectangle";
function Step2({page,setPage}) {
  return (
    <>
      <Card className="mt-8 p-8 border-[1px] border-[#DAE6FF] rounded-[10px]">
        <div className="flex items-center">
          <p className="text-[#000000] font-bold text-[16px] leading-[32px]">
          Choose the Product
          </p>
          <p className="pl-2 text-[#000000] opacity-50 font-medium text-[14px] leading-[32px]">
            (Step 2 of 4)
          </p>
        </div>
        <hr className="w-[100%] h-[1.5px] bg-[#EAEAEA]" />
        <div className="pt-6">
        
          <div className="flex flex-wrap gap-[20px]">
            {data.map((value, index) => { return ( <Step2Rectangle Source={value.imgLink} Title={value.title}  Description={value.description}/>); })}
          </div>
        </div>
      </Card>
      <Button onClick={()=>page===3?setPage(0):setPage(page+1)} className="mt-6 bg-[#0F6EFF] h-[50px] w-60 right-[120px] absolute text-white-100 text-[16px] font-medium leading-6 hover:bg-white-100">Continue</Button>
    </>
  )
}

export default Step2;
