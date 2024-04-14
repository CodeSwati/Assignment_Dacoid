import React from 'react'
import { PiCellSignalFullBold } from "react-icons/pi";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFullOutline } from "react-icons/io5";


function Status() {

  
  return (

    <div className=' flex justify-between'>
        <p className='font-semibold text-sm'>9:41</p>
        <div className='flex gap-1'>
          <PiCellSignalFullBold />
          <IoIosWifi />
          <IoBatteryFullOutline />
        </div>
    </div>

  )
}

export default Status