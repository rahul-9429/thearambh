import React from 'react'
import Arrow from '../../../images/Arrow.png'
import Image from 'next/image'
const Book_a_meet = () => {
  return (
    <button className='flex justify-center items-center gap-2 border-2 text-black font-semibold border-black rounded-full bg-white px-4 py-2 opacity-90 hover:opacity-100'>
    Book a Meeting 
    <Image 
     src={Arrow}
     alt="Arrow"
    />
    </button>
  )
}

export default Book_a_meet


