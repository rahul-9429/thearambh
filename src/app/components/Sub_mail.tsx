import React from 'react'
import { Rasa } from 'next/font/google';
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const Sub_mail = () => {
  return (
    <div className={` ${rasa.className} box-ss w-fit h-fit p-7 m-6 justify-center text-black items-center gap-5 fck flex flex-col rounded-2xl shadow-xl text-center sm:w-1/2 sm:m-0 sm:p-12`}>
        <h1 className='font-bold text-4xl'>
        Subscribe to our Newsletter
        </h1>
        <p className='sm:text-xl'>
        Snippets for Founders on Growth and things that matter in Founders journey
        </p>
    <form >
        <div className="flex items-center gap-1">
            <input
                type="email"
                className="w-full h-10 p-2 border-2 border-none border-r-10 rounded-l-full focus:outline-none text-black font-semibold "
                placeholder="you@domain.com"
            />
            <button
                type="submit"
                className="h-10  focus:outline-none text-black font-semibold border-nones border-l-10 rounded-r-full bg-white px-4 py-2 hover:bg-teal-400 hover:text-black"
            >
                Subscribe
            </button>
        </div>
    </form>
    <p className=' h-4 bg-pink-500'>
        {/* Thank you for sub */}
    </p>
</div>

  )
}

export default Sub_mail