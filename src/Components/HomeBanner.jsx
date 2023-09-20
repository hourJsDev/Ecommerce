import React from "react";
import Image from '../assets/Dis.png'
import UserAccessBtn from "./UserAccessBtn";
import '../Styles/Amation.css'
const HomeBanner = () => {
  return (
    <div className="animation-rotate flex mx-auto items-center bg-[#f8fafc] pl-[1rem]">
      <div className="w-[40rem] flex flex-col gap-[1rem]">
        <h1 className="text-[3rem] font-[500]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cum!
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut?</p>
        <UserAccessBtn/>
      </div>
      <div className="w-[50rem] h-[30rem]">
        <img className="w-full h-full object-cover" src={Image} alt="HomeBanner" />
      </div>
      
    </div>
  );
};

export default HomeBanner;
