import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

const Features = () => {
  return (
    <div className='flex gap-[88px]'>
      <div className='flex flex-col items-center gap-[1.5rem]'>
        <div className='w-[80px] h-[80px] rounded-full bg-[#C1C1C1] grid place-content-center'>
          <div className='bg-[black] grid place-content-center w-[58px] h-[58px] rounded-full'>
            <TbTruckDelivery size={30} className='text-white'/>
          </div>
        </div>
        <div className='text-center'>
          <p className='text-[20px] font-semibold'>FREE AND FAST DELIVERY</p>
          <p className='text-[14px]'>Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-[1.5rem]'>
        <div className='w-[80px] h-[80px] rounded-full bg-[#C1C1C1] grid place-content-center'>
          <div className='bg-[black] grid place-content-center w-[58px] h-[58px] rounded-full'>
            <RiCustomerService2Fill size={30} className='text-white'/>
          </div>
        </div>
        <div className='text-center'>
          <p className='text-[20px] font-semibold'>24/7 CUSTOMER SERVICE</p>
          <p className='text-[14px]'>Friendly 24/7 customer support</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-[1.5rem]'>
        <div className='w-[80px] h-[80px] rounded-full bg-[#C1C1C1] grid place-content-center'>
          <div className='bg-[black] grid place-content-center w-[58px] h-[58px] rounded-full'>
            <GoShieldCheck size={30} className='text-white'/>
          </div>
        </div>
        <div className='text-center'>
          <p className='text-[20px] font-semibold'>MONEY BACK GUARANTEE</p>
          <p className='text-[14px]'>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  )
}

export default Features
