"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Book_a_meet from './Book_a_meet'
import Image from "next/image";
import Arambh from "../../../images/arambh.png"

import {Rasa} from "next/font/google";
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const Header = () => {
     const [scrollTop, setScrollTop] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrollTop(window.scrollY || document.documentElement.scrollTop);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
  return (
    <div className={ `${rasa.className}  z-50 flex justify-between fixed w-full top-0 items-center p-2 text-white sm:px-24 sm:py-3  ${scrollTop > 1 ? 'bg-white shadow-black/10 shadow-xl transition-all duration-100 ': 'transition-all duration-100'}`}>
            <span>
              <Link href="/">
             <Image src={Arambh} alt="Arambh" width={200} height={200} 
             className="invert max-sm:w-40"
             />
              </Link>
            </span>
            <span>
               <Book_a_meet/>
            </span>
    </div>
  )
}

export default Header