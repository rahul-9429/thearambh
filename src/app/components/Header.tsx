"use client";

import React, { useState, useEffect } from "react";
import Book_a_meet from './Book_a_meet'
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
    <div className={`z-10 flex justify-between fixed w-full top-0 items-center p-4 text-white sm:px-24 sm:py-5 ${scrollTop > 1 ? 'bg-black': ''}`}>
            <span>Arambh</span>
            <span>
               <Book_a_meet/>
            </span>
    </div>
  )
}

export default Header