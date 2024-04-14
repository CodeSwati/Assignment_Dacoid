import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Page1() {
  return (
    <div className='flex flex-col items-center mt-6 '>
        <Link to="/page2" className='w-[393px] flex justify-end text-[#9FB2FF] underline underline-offset-2'>Skip</Link>
        <div className='flex flex-col gap-4 w-[393px]'>
            <img className='w-[17rem] h-[16rem]  flex self-center'  
            src='https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X98NRcuTqs-LptbnMh8RugF2~giYfag76Pj4fDaCsYjiOxKMJAmU83mRTuBiDO--rZtkz8tgcqXe--QgR0XDTWiw3v3LSOmG1ty6G6aWVmj~1aqDWqMW0WQ0H9vT1ThnQYUm21xuvgiP31FNPy2JGIPek-rLc2gOU57w5pUncI0dkbC2XG~dHXLhmPJP2RGfxaPzPrXABntLnE6JVJtUKL5SNI3bToqm9hnpecsig~gIAJbwiF6otDKx1SRsB2giqMwv0Oz4N3dklR77Y2IKMrxtdBxRNY4nxASS8iW73pI4sp3CvgngfqAGrKgnSAc1fLXUjFDGSYNR~UwcgfB7Uw__'/>
            <h2 className='text-xl font-bold text-[#2C2B2B] mt-4'>Track Your Goal</h2>
            <p className='text-base text-[#787878]'>Don't worry if you have trouble determining your goals,
                 We can help you determine your goals and track your goals</p>
        </div>

        <div className=' mt-10 flex justify-end w-[393px]'>
            <Link to="/page2" className='h-9 w-9 flex justify-center items-center rounded-full bg-gradient-to-r 
            from-[#DEE5FF] to-[#809AFF]  outline outline-offset-2 outline-1 outline-[#89A1FF]'>
             <FaAngleRight className='text-white' />
            </Link>

        </div>
    </div>
  ) 
}

export default Page1