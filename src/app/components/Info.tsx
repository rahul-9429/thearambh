import React from 'react'
import '../../../styles/globals.css';
import ServiceComp from './ServiceComp';
import { Rasa } from 'next/font/google';
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const Info = () => {
  return (<>
    <div className={`py-20 dot_bg ${rasa.className} `}>
      <h2 className="flex gap-6 text-6xl text-black justify-center items-center ">
      {/* <span className="w-1 bg-black h-auto block z-49"></span> */}
      Transforming Ideas into Impact</h2>
      <div className='flex flex-col sm:flex-row justify-center items-center'>
        <ServiceComp Names="Dev" imgUrl="https://img.icons8.com/pulsar-line/50/code.png" />
        <ServiceComp Names="Branding" imgUrl="https://img.icons8.com/?size=100&id=18260&format=png&color=000000"/>
        <ServiceComp Names="Marketing" imgUrl="https://img.icons8.com/?size=100&id=WXr2zzap5DhC&format=png&color=000000"/>
      </div>
    </div>
  </>

  )
}

export default Info