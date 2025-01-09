"use client"
import Image from "next/image"
import GradientTextComponent from "./GradientText.component"
import Link from "next/link"
 

export default function LogoComponent() {
 
    return (
        <div className="absolute top-5 flex justify-between items-center  pl-[50px] z-[400]">
        <Link href={"/"} className="flex space-x-3 items-center"
         >
        <Image 
         src={"/images/logo.png"}
         height={70}
         width={70}
         alt="logo Image"
         className=" h-[30px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-auto"
         priority={true}
         
         />
         <p className="text-white text-xl lg-1:text-2xl lg:text-2xl font-bold">Websero <GradientTextComponent texts="Creative" span={true} classNames="text-xl lg-1:text-2xl lg:text-3xl " /> </p>
        </Link>
         
       </div>
    )
}