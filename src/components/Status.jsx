import React from 'react'
import { PiCellSignalFullBold } from "react-icons/pi";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFullOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Status() {

  
  return (
   <div className='flex w-full flex-col gap-20'>
      <div className=' flex justify-between'>
          <p className='font-semibold text-sm'>9:41</p>
          <div className='flex gap-1'>
            <PiCellSignalFullBold />
            <IoIosWifi />
            <IoBatteryFullOutline />
          </div>
      </div>
      <Link to="/page1" className=' text-center text-[#9FB2FF] underline 
      underline-offset-2'>Skip this dummy page</Link>

    </div>

  )
}

export default Status