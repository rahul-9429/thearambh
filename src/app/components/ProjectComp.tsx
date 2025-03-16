import React from 'react'
import Image from 'next/image'
const ProjectComp = () => {
  return (
    <div className=' '>
      <Image src='/vyaayaam.jpg' alt='Fiksu Global Solutions' width={400} height={400} className='rounded-[3rem] w-full h-72 object-cover ' />
      <div className='flex justify-between '>
        <div className='w-[80%]'>
         <h1>Vyaayaam</h1>
        <p>
          Getting fit is a journey, and we're here to help you every step of the way.
        </p>
        </div>
        <div className='w-[20%] text-center '>
          <h1>TBA</h1>
        </div>
      </div>
    </div>
  )
}

export default ProjectComp