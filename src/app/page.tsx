import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cal_meet from "./components/Cal-meet";
export default function Home() {
 
  return (
    <>
      <Header />
      <Hero />
      <main className="min-h-screen">
      {/* <Cal_meet /> */}

      </main>
      <Footer />
    </>
  );
}
