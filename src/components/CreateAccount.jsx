import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from 'react-router-dom';


function CreateAccount() {
  return (
    <div className='flex flex-col items-center gap-7 mt-6 w-full'>
        <h1 className='text-3xl font-bold '>Create an Account</h1>
        <div className='flex flex-col gap-6 text-sm'>
            <input placeholder='First Name'  className='bg-[#F1F1F1]  text-[#7F7F7F] w-[343px] h-[40px]
             border border-transparent rounded-xl pl-2 outline-none'/>
             <input placeholder='Last Name' className='bg-[#F1F1F1] text-[#7F7F7F] w-[343px] h-[40px]
             border border-transparent rounded-xl pl-2 outline-none'/>
             <input placeholder='Email' className='bg-[#F1F1F1] text-[#7F7F7F] w-[343px] h-[40px]
             border border-transparent rounded-xl pl-2 outline-none'/>
             <input placeholder='Password' className='bg-[#F1F1F1] text-[#7F7F7F] w-[343px] h-[40px]
             border border-transparent rounded-xl pl-2 outline-none'/>
        </div>

        <div className='flex gap-2 text-sm'>
            <input type="checkbox" id="condition" />
            <label for ="condition" >By proceeding, I agree to all  
            <span className='text-[#7B91FF] underline underline-offset-2'> T&C</span> and
             <span className='text-[#7B91FF] underline underline-offset-2'> Privacy Policy</span> </label>
        </div>

        <div className='flex flex-col items-center w-auto gap-8 '>
            <Link to="/goalPage" className=''>
                <button className='px-[6rem] py-2 flex justify-center items-center rounded-xl bg-gradient-to-r 
                from-[#7B91FF] to-[#95BEFF] text-sm text-white'>Create an Account</button>
            </Link>
            
           <div className='flex items-center gap-1'>
                <div className= ' w-[155px] h-0 border-t border-[#7F7F7F]'></div>
                <p className='text-xs'>Or</p>
                <div className='w-[155px] h-0 border-t border-[#7F7F7F]'></div>
            </div>

            <div className='flex gap-8'>
                <FcGoogle className='outline outline-1 outline-offset-4 '/>
                <GrFacebookOption className='outline outline-1 outline-offset-4' />
            </div>

           <Link to="/welcomePage">
              <p className='text-sm'>Already have an account? <span className='text-blue-500 hover:underline
               hover:underline-offset-2'>Login </span> </p>
           </Link>
            
        
        </div>

        
    </div>
  )
}

export default CreateAccount