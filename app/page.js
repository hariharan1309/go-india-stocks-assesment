'use client'
import Image from "next/image";
import NavBar from "./components/NavBar";
import DiscussionForm from "./components/DiscussionForm";
import MarketStories from "./components/MarketStories";
import { useRef, useState } from "react";

export default function Home() {
  const [nav,setNav]=useState(false);
  const discuss=useRef(null);
  const market=useRef(null);
  const [active,setActive]=useState("Discussion")
  const handleCLick=(tab,ref)=>{
    setActive(tab);
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <main className="max-h-fit text-sm box-border">
      <div className="grid grid-cols-[auto,1fr] h-full max-md:flex max-md:flex-row">
        <div className="flex z-10 h-[100vh] max-md:fixed top-0 sticky ">
          <NavBar isVisible={nav} />
          <div className={`${nav===true && "bg-gray-300"} flex items-center justify-center`}>
            <span className="py-10 bg-blue-800 hover:bg-blue-900" onClick={()=>setNav(e=>!e)}>
              <img src="/assets/right_arrow_icon.png" className="h-5"/>
            </span>
          </div>
        </div>
        <div className="flex flex-row max-md:flex-col ">
        <div className="md:hidden w-full flex flex-row justify-evenly bg-blue-900 text-white font-semibold text-xl cursor-pointer sticky top-0 z-5 border-x-8 border-black">
              <span className={`text-center py-1 hover:bg-blue-900 w-full ${active=="Discussion"?'bg-blue-950 border-b-2 border-red-500':''}`} onClick={()=>handleCLick("Discussion",discuss)}>DiscussionForm</span>
              <span className={`text-center py-1 hover:bg-blue-900 w-full ${active=="Market"?'bg-blue-950 border-b-2 border-red-500':''}`} onClick={()=>handleCLick("Market",market)}>MarketStories</span>
          </div>
          <div  ref={discuss} onClick={()=>{nav===true? setNav(e=>!e):''}} > <DiscussionForm/></div>
          <div  ref={market} onClick={()=>{nav===true?setNav(e=>!e):''}}><MarketStories /></div>
        </div>
      </div> 
    </main>
  );
}
