"use client";
import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Cal_meet = () => {
    useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])
      return <Cal namespace="30min"
        calLink="rahul-kasimikota/30min"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view"}}
      
        
      />;
}

export default Cal_meet