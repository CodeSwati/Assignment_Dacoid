import React from 'react'
import { Link } from 'react-router-dom'
import { FiAlertTriangle } from "react-icons/fi";
import { IoToggle } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineCamera } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GoImage } from "react-icons/go";


function Tracker() {
  return (
    <div className='flex flex-col items-center gap-8 my-6 w-full'>
        <h1 className='text-3xl font-bold '>Workout Tracker</h1>
        <Link to="/schedulePage" className='w-96'>
            <img src='https://discussions.apple.com/content/attachment/f7244593-c308-4962-8342-bc3e4445c9fc'/>

        </Link>

        <div className='flex items-center rounded-lg bg-gradient-to-r p-2 w-[328.75px] h-[50px] sm:w-1/3
                from-[#819DFF] to-white'>
            <FiAlertTriangle className='mr-2'/>
            <p className='text-sm'>You've burned fewer calories than yesterday. Time to get moving! </p>
        </div>

        <div className='flex flex-col gap-10 '>
            <div className='flex items-center justify-between w-[393px]'>
                <h1 className='text-xl font-semibold'>Upcoming Workout</h1>
                <p className='text-sm text-gray 100'>See more</p>
            </div>

            <div className='flex w-full justify-between p-2 bg-[#FFFFFF] drop-shadow-2xl border border-transparent rounded-xl'>
                <img  className='h-10'
                src='https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~R5jLwDlFZg5jA64xQhhXbvhiOqzfoczemNjyW41IVUCfJ07EPR-hsYnSBBRI2sqofehWaWTuQY~6RvVQ3wD76Uk4Txe5bN9Yj1DViahbdVfdkonHpB-PV-nkAvCb3M2NCNr6qtm~WbCe8Ev5zORs0VERmpMiOOhbBv355jujI8R0aeICn1CHOqALGYLcoqFrac56bs-WVo5jgsmBTg7gf1NHO-AuLwLmlrvKIaHMDoOPg1EhdNJrWE2shP4dNuAzmevLfNGzn1tgxrdGBTo~lSYqtGIlBfZOQfGq9c5AuV7OKylc4iRvLNCto3-0o-1ytNSDtJ1gRJESlnAmuicQ__'/>
                <div className='flex flex-col gap-1 -ml-40'>
                    <p className='text-sm font-medium'>Full Body Workout</p>
                    <p className='text-xs'>Today 3pm</p>
                </div>

                <div className=''>
                    <IoToggle className='text-blue-500 text-2xl' />
                </div>
            </div>
            
            <div className='flex w-full justify-between p-2 bg-[#FFFFFF] drop-shadow-2xl border border-transparent rounded-xl'>
                <img  className='h-10'
                src='https://s3-alpha-sig.figma.com/img/5688/dda6/63ce83a9876ee1cadf652148a636fe39?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AqtSmY1k0iQ8zli~s3WMSgjesxoSBX573f59fyG3X26w9pIUPYo3nnz3m3c4qUGEIovIU09HBtKVrkQySapb0bh8Yp8U1FJK5aPFsozGeJ8X861G5sPhGHKYlsLopZDDDwAa6ARD3e6uHOn6FB3FULjSyMzWCM9Uf3ARLQk-RlKJA8a-wiR7virfjjVWh4IzgnqiQbjrIqzXxccxMsIXsy0zZjzxEuZlEglquyGS6~c4lWjn~qF0tc8kXABthnR~PLAlkKsLKaMV7GtrCE90MqDMlogLvYNaTUjWgiQ2UvuzhlOWODEEhPSJhpWAX-cKKrst9CGnC6Km~BR-DEGKKg__'/>
                <div className='flex flex-col gap-1 -ml-40'>
                    <p className='text-sm font-medium'>Upper Body Workout</p>
                    <p className='text-xs'>4 Feb, 3:30 pm</p>
                </div>

                <div className=''>
                    <IoToggle className='text-blue-500 text-2xl' />
                </div>
            </div>

            <div className='flex flex-col gap-6 w-[393px]'>
                <h1 className='text-lg font-semibold'>What Do You Want to Train</h1>

                <div className='bg-[#8CB1FF99] px-4 pt-4 border border-transparent rounded-t-2xl flex justify-between items-center'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-medium'>Full Body Workout</p>
                        <p className='text-xs'> Arms</p>
                        <p className='text-xs'>Chest</p>
                    </div>
                    <img className='h-20 w-20  bg-white border border-transparent rounded-full'
                     src='https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mu33qv9pYMsUqYlc9TFa5ztiZhwNCioQkCJ4s~C5W9TtHezEYCOvLE9X3I4rvzFgZJ1X4FDgOQwtkiNovuk7EWLhsinm8Sody3hycvElP3~J6V4oLgXkoHjd~O-oFgMKfjnYA~XKv9WfsKfotsK0WJ0gEjvTY~LXvi34bZZdbcMOZ-EEk5yKQ9kpACihIFgANBY-PN7NpvZN-0p1i05GsvdVvhx9LzOQLnTRmbUJakdyx3pqot3txCBZSpXDnnHJiDlwZwE-j-x84-yE2snCCUTn~LsZBbvKtpP7a1nl9h5I6Tkl503oojKuwQs~zH9rUa30hrt4I3WvV8Gkk5wwHg__' />
                </div>

                <div className='text-2xl flex justify-between relative'>
                    <div className='flex gap-16'>
                        <RiHome2Line className='text-[#7F7F7F]' />
                        <GoImage  className='text-[#7F7F7F]' />
                    </div>
                  
                  <div className=' bg-gradient-to-r absolute bottom-6 left-[11rem] rounded-full  p-4 from-[#DEE5FF] to-[#809AFF] text-white'>
                    <CiSearch className='' />
                  </div>
                   
                   <div className='flex gap-16'>
                        <HiOutlineCamera className='text-[#7F7F7F]' />
                        <FaRegUser className='text-[#7F7F7F]' />
                   </div>
                  
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Tracker