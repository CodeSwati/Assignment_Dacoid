import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import {Link} from 'react-router-dom' 

function Page2() {
  return (
    <div className='flex flex-col items-center mt-6 '>
        <Link to="/createPage" className='w-[393px] flex justify-end text-[#9FB2FF] underline underline-offset-2'>Skip</Link>
        <div className='flex flex-col gap-4 w-[393px]'>
            <img className='w-[17rem] h-[16rem] flex self-center'  
            src ='https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr3KQ~d1yUj8ihEHiaH7fqq2Bx87CveYvGg5WfoTnraj4r5QDk9Rs2g7PQ0NkiePRuEs015f2Scvkp9djImftRb7vIN0Q436lUOUi2Vz0HMN2YLBsrUwlsxwHK4~i~GT7KGdOrwjVV045VwrAdEFTsIHU5OFwbyLFidv7viJwMQL~Dj1dO58aVn70O0qclkztMmmGqgp5sbPUTTBET0FqbqH2YDMASEQdPn-Eamptqvrv8K6eu-nsZ5Tr9lKIAKKP4MB5iSZncm46y5fepqMHCd~cdCg13TMWcF-QtyOF1YrT3NN~w4WQDoFpdPZYcVqBqLyN6pDrkUSf-~AcMV5VQ__
            '/>
            <h2 className='text-xl font-bold text-[#2C2B2B] mt-4'>Get Burn</h2>
            <p className='text-base text-[#787878]'>Let's keep burning to achieve your goals, it hurts only temporarily,
             if you give up now you will be in pain forever</p>
        </div>

        <div className=' mt-10 flex justify-end w-[393px]'>
            <div className='h-9 w-9 flex justify-center items-center rounded-full bg-gradient-to-r 
            from-[#DEE5FF] to-[#809AFF]  outline outline-offset-2 outline-1 outline-[#89A1FF]'>
             <FaAngleRight className='text-white' />
            </div>

        </div>
    </div>
  )
}

export default Page2