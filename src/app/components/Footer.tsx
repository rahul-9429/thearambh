import React from 'react'
import CircularText from './CircularText'
import Sub_mail from './Sub_mail'
import { Rasa } from 'next/font/google';
import { Linkedin, Instagram } from "lucide-react";
import arambh_a from './../../../images/arambh_a.png'
import Image from 'next/image' 
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });


const Footer = () => {
  return (
    <>
    {/* <div className= {` ${rasa.className} w-full min-h-52 flex justify-center items-center `}>
    <Sub_mail/>
    </div> */}

    <div className=' w-full h-52 bg-white text-black p-4 z-10  '>
        <div className=''>
            <div className='flex justify-between pl-2 pr-2 sm:pl-16 sm:pr-16 pb-4'>
            <span className='flex gap-4'>
            <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-pink-500 transition-transform transform hover:scale-110"
      >
        <Instagram className="w-6 h-6" />
      </a>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 transition-transform transform hover:scale-110"
      >
        <Linkedin className="w-6 h-6" />
      </a>
            </span>
            <span>
              <Image src={arambh_a} alt="Arambh" width={20} height={20}
               className="invert"
              />
            </span>
            </div>
            <hr/>
            <div className="flex items-center top-0 justify-between h-1/8">
            <div className={`   ${rasa.className} pl-2 text-lg sm:pl-16 items-top flex sm:-mt-12 mt-6`}>
            Visakhapatnam - 11,<br/>

            Andhara Pradesh IN. </div>
            <div className='mt-10  hidden sm:block'>
            <CircularText/>
        </div>
    </div>
    <div className={`  ${rasa.className} text-lg sm:pl-16 sm:-mt-16 mt-6 pl-2 mb-10`}>
                    <a href="mailto:rahulkasimikota@gmail.com">
                    rahulkasimikota@gmail.com
                    </a>
    </div>
             <div className={`${rasa.className} text-sm flex justify-between sm:pl-16 sm:pr-16 sm:pb-5 sm:scroll-mt-6 sm:flex-row flex-col pl-2  sm:items-center`} >
                <span>
                &copy; {new Date().getFullYear()} The Arambh Studio. All rights reserved.
                </span>
                <div className='sm:w-1/4 justify-between flex cursor-pointer pt-8 pb-5'>
                    <div className='hover:text-teal-400 underline'>
                       Privacy Policy
                    </div>
                    <div className='hover:text-teal-400 underline'>
                       Terms of Service
                    </div>
                </div>
             </div>
        </div>
   

    </div></>
  )
}

export default Footer