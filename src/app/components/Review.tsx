import React from 'react'
import Image from 'next/image'
import {WindSong} from 'next/font/google'
import Arambh from "../../../images/arambh.png"
import Vinay from "../../../images/Vinay.png"


const wildSong = WindSong({subsets: ['latin'], weight: ['500']})
const Review = () => {
  return (
    <div className='relative bg-black/5 border border-white/20 shadow-lg backdrop-blur-3xl rounded-lg flex flex-col justify-center items-center sm:w-[70%] w-[90%] text-black z-50 p-6'>
      <div className='sm:p-8 px-2 text-left w-full'>
        {/* Profile Image */}
        <Image src={Vinay} alt='vinay, MD Arambh' width={50} height={50} className='rounded-full border grayscale border-gray-700 mb-4' />

        {/* Review Text */}
        <h1 className='pb-6  text-lg font-semibold'>
        The first step in building your brand is creating a powerful online presence. We dont just build websites—we craft digital identities that redefine your brand and set you apart.
        </h1>

        {/* Reviewer Info */}
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <ul className='flex space-x-4 list-none'>
              <li>
                <h3 className={`text-xl text-black font-extrabold ${wildSong.className}`}>
                   Vinay
                </h3>
              </li>
              <li>|</li>
              <li className={`  text-xl font-medium`}>MD</li>
              <li>|</li>
              <li className='  text-xl font-medium'> 
                <Image src={Arambh} alt='Arambh' width={75} height={75} className='invert mt-1' />  
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
