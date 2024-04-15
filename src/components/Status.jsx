import React from 'react'

import { Link } from 'react-router-dom';


function Status() {

  
  return (
   <div className='w-full flex justify-center mt-40'>
      
      <Link to="/page1" className=' text-[#9FB2FF] underline 
      underline-offset-2'>Skip this dummy page</Link>

    </div>

  )
}

export default Status