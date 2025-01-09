"use client";

 
// loading lottie with no ssr issues

import dynamic from "next/dynamic";
import { ShootingStarsComponent } from '@/components/ShootingStars.component';
import FullPageNav from "@/components/Navbar.component";

const NotFoundAnimation = dynamic(() => import("../components/LottieFileComponents/NotFoundLottie.component"), { ssr: false });


export default function NotFound() {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-x-hidden">
      {/* fullpage navbar component */}
      <FullPageNav />
      <div className="absolute inset-0">
        <ShootingStarsComponent />
      </div>
      <div className=" h-full w-full flex justify-center items-center text-center ">

      <div className='w-auto min-h-[200px]'>
      <NotFoundAnimation />
        </div> 
      
      </div>
      
      </div>
    

   
  );
}
