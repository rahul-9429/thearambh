import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-georama">
    
    <main className="flex flex-col gap-8 row-start-2 items-center ">
      <div className="w-fit flex flex-col items-end " > 
      <h1 className="text-5xl justify-center items-center flex m-auto">ārambh</h1>
      <span className="justify-end -mt-2 mr-0.5 text-xs">the begining</span>
      </div>
      <p>Thank you for showing up! The site is under construction.</p>
     
      
    </main>
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
     
     
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="mailto:rahulkasimikota@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Contact →
      </a>
    </footer>
  </div>
  );
}
