"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Rasa } from 'next/font/google';
import Head from "next/head";
const rasa = Rasa({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const CalMeet = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className={` ${rasa.className} p-2 sm:p-24 min-h-screen text-black`}>
      <Head>
        <title>Schedule a Call</title>
        <meta name="description" content="Schedule a call with us" />
      </Head>
      <h2 className="flex gap-6 text-6xl ">
      <span className="w-1 bg-black h-auto block"></span>
      Schedule a Call</h2>
      <p className="pt-3 text-2xl">You are just few taps away from building your brand, We are always open for you</p>

      <div className="pt-10">
        <Cal
          namespace="30min"
          calLink="rahul-kasimikota/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" , theme: "light"}}
        />
      </div>
    </div>
  );
};

export default CalMeet;
