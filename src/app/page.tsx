import React from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Hero_text from "./components/Hero_text";
import Featured from "./components/Featured";
import Projects from "./components/Projects";


export default function Home() {
 
  return (
    <>
      <Hero_text />
      <Hero />
      <Info />
      <Featured />
      <Projects />
    </>
  );
}
