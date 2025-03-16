import React from 'react';
import { Rasa } from 'next/font/google';
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
import Book_a_meet from './Book_a_meet';
import Review from './Review';
const Hero_text = () => {
  return (
    <div className={`flex sm:flex-row flex-col min-h-screen p-0 sm:p-20 z-10 ${rasa.className}`}>
      <div className="sm:text-9xl px-10 py-20 sm:px-0 sm:py-0  sm:text-left text-black text-7xl w-full sm:w-9/12 mt-16 z-49 opacity-100 text-pretty">
      Seamless 
      <br />
      Solutions,
      <br />
      <span
      className='bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-yellow-500' 
      >Limitless </span>

      Possibilities
      <Book_a_meet />

      </div>
      <div className='z-30 flex items-center justify-center '>
      <Review />
      </div>

    </div>
  );
};

export default Hero_text;
