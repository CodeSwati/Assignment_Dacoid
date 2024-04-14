import React from 'react'
import { Link } from 'react-router-dom'

function GoalPage() {
  return (
    <div className='flex flex-col items-center gap-8 mt-6 w-full'>
        <h1 className='text-2xl font-bold '>What are your goals?</h1>

        <div className='flex flex-col gap-6'>
            
            {["Weight Loss","Muscle Gain","Flexibility and Mobility","General Fitness","Event - specific training",
            "Mindfulness and Mental Health"].map((item,index)=>

            <div className='bg-[#F1F1F1] w-[343px] h-[50px] border border-transparent rounded-xl p-4 flex 
            justify-between items-center text-sm'>
                <p>{item}</p>
                <input type="checkbox"/>
            </div>            

            )}
        </div>

        <Link to="/trackerPage" className='mt-6'>
                <button className='px-[6rem] py-2 flex justify-center items-center rounded-xl bg-gradient-to-r 
                from-[#7B91FF] to-[#95BEFF] text-white text-sm'>Confirm</button>
            </Link>
    </div>
  )
}

export default GoalPage