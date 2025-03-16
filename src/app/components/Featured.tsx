import React from 'react'
import Image from 'next/image'
import Fiksu from '../../../public/fiksu.png'
import {Kalnia_Glaze} from 'next/font/google'
const kalniaGlaze = Kalnia_Glaze({subsets: ['latin'], weight: ['400']})

const Featured = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className={`${kalniaGlaze.className} text-6xl`}>
      Design. Brand. Market.
      </h1>
        Featured
        <Image src={Fiksu} alt='Fiksu Global Solutions' width={200} height={200} className='grayscale invert' />
    </div>
  )
}

export default Featured