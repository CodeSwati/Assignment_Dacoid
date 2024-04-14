import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { FaRegEyeSlash } from "react-icons/fa";


function Welcome() {
  return (
    <div className='flex flex-col items-center gap-7 mt-6 w-full'>
        <h1 className='text-3xl font-bold '>Welcome Back</h1>
        <div className='flex flex-col gap-6'>
    
             <input placeholder='Email' className='bg-[#F1F1F1] text-sm text-[#7F7F7F] w-[343px] h-[40px]
             border border-transparent rounded-xl pl-2 outline-none' required/>
             <div className='flex justify-between items-center'>
                <input placeholder='Password' className='bg-[#F1F1F1] text-sm text-[#7F7F7F] w-[343px] h-[40px]
                border border-transparent rounded-xl pl-2 outline-none' required/>
                <FaRegEyeSlash className='-ml-6' />
             </div>
             
             <p className='underline underline-offset-2 text-xs'>Forgot your password?</p>
        </div>

        
               

        <div className='flex flex-col items-center w-auto gap-8 mt-24'>
            <Link to="/goalPage" className=''>
                <button className='px-[6rem] py-2 flex justify-center items-center rounded-xl bg-gradient-to-r 
                from-[#7B91FF] to-[#95BEFF] text-sm text-white'>Sign In</button>
            </Link>
            
           <div className='flex items-center gap-1'>
                <div className= ' w-[155px] h-0 border-t border-[#7F7F7F]'></div>
                <p className='text-xs'>Or</p>
                <div className='w-[155px] border-t border-[#7F7F7F]'></div>
            </div>

            <div className='flex gap-8'>
                <FcGoogle className='outline outline-1 outline-offset-4 '/>
                <GrFacebookOption className='outline outline-1 outline-offset-4' />
            </div>

           <Link to="/createPage">
              <p className='text-sm'>Don't have an account yet? <span className='text-blue-500 hover:underline
               hover:underline-offset-2'>Create an account  </span> </p>
           </Link>
            
        
        </div>

        
    </div>
  )
}

export default Welcome