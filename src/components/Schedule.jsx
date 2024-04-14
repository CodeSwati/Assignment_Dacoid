import React from 'react'
import { Link } from 'react-router-dom'
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineCamera } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GoImage } from "react-icons/go";
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


function Schedule() {
  return (
    <div className='flex flex-col items-center gap-8 mt-6 w-full'>
        <h1 className='text-3xl font-bold '>Workout Schedule</h1>

        <div className='flex text-sm items-center gap-4'>
           <FaAngleLeft />
           <p className='font-medium'>Feb 2024</p>
           <FaAngleRight />
        </div>

        <div className='flex justify-between w-[393px] '>
           {[{day:"Sun",date:"5"},{day:"Mon",date:"6"},{day:"Tue",date:"7"},{day:"Wed",date:"8"},{day:"Thu",date:"9"}
           ].map((item,index)=>
           <div className="flex flex-col" >
              <p className='text-xs'>{item.day}</p>
              <p className='text-2xl font-semibold'>{item.date}</p>
           </div>

           )}
        </div>

        <div className='flex flex-col gap-4 w-[393px] relative'>
           {["6.00","7.00","8.00","9.00","10.00","11.00","12.00","1.00","2.00","3.00","4.00","5.00"
           ].map((item,index)=>
           <>
           <div className="flex flex-col" >
              <div className='flex p-4'>
                <p className='text-xs'>{item}</p>
                <p className='text-xs'>AM</p>
              </div>
              
              <hr className='border'/>
           </div>

           <div className=' bg-gradient-to-r absolute bottom-[7rem] right-[1rem] rounded-full  p-4 from-[#E9B1E0] to-[#D3A5F2] text-white'>
           <FaPlus />
           </div>
        </>
           )}
        </div>

        <div className='text-2xl  flex justify-between relative w-[393px]'>
                    <div className='flex gap-16'>

                        <Link to="/page1"><RiHome2Line className='text-[#7F7F7F]' /></Link>
                        
                        <GoImage  className='text-[#7F7F7F]' />
                    </div>
                  
                  <div className=' bg-gradient-to-r absolute bottom-6 left-[11rem] rounded-full  p-4 from-[#DEE5FF] to-[#809AFF] text-white'>
                    <CiSearch className='' />
                  </div>
                   
                   <div className='flex gap-16'>
                        <HiOutlineCamera className='text-[#7F7F7F]' />
                        <Link to='/welcomePage'><FaRegUser className='text-[#7F7F7F]' /></Link>
                        
                   </div>
                  
                </div>

    </div>
  )
}

export default Schedule