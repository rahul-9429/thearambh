import React from 'react'
import { Rasa } from 'next/font/google';
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

interface ServiceCompProps {
    Names: string;
    imgUrl: string;
}

const ServiceComp: React.FC<ServiceCompProps>  = ({Names,imgUrl}) => {
  return (
    <div className='text-center w-[240px] opacity-100 mx-8 my-4 z-10'>
    <div className="bg-gray-100 h-[240px] w-[240px] rounded-3xl hover:shadow-2xl hover:bg-white transition-all duration-300 flex justify-center items-center">
        <span className={`${rasa.className} text-2xl text-black font-bold`}>
        {/* {Names} */}
        <img width="50" height="50" src={`${imgUrl}`} alt=" "/>
        </span>
       
    </div>
     <span className={`${rasa.className} text-2xl text-black font-bold`}>
     {Names}
     </span>
     </div>
  )
}

export default ServiceComp