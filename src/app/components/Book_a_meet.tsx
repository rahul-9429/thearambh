import React from 'react';
import Arrow from '../../../images/Arrow.png';
import Image from 'next/image';
import Link from "next/link";
import '../../../styles/globals.css';
import { Rasa } from 'next/font/google';
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const Book_a_meet = () => {
  return (
    <Link href="/meet">
      <button className={`${rasa.className} flex justify-center items-center gap-2 border-2 text-black text-lg font-semibold border-black rounded-full  px-4 py-2 bg-teal-400/20 hover:bg-teal-400/60 transition-colors transform duration-300`}>
        Book a Meeting 
        <Image 
          src={Arrow}
          alt="Arrow"
        />
      </button>  
    </Link>
  );
};

export default Book_a_meet;
