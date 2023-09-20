import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-c-800 px-[10%] h-[15rem] flex justify-between items-center mt-[10rem]">
      <article>
        <p className="text-[1.1rem] text-gray">
          &copy;2021 Hour Developer. All Rights Reserved.
        </p>
      </article>
      <article className="flex flex-col gap-[1rem]">
        <div className="flex gap-2 items-center">
          <span className="text-gray text-[1.4rem]">
            <MdEmail />
          </span>
          <span className="text-gray text-[1.2rem]">hourjs168@gmail.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray text-[1.4rem]">
            <AiFillPhone />
          </span>
          <span className="text-gray text-[1.2rem]">061-20-83-22</span>
        </div>
      </article>
      <articl className="flex flex-col gap-[1rem]">
        <span className="text-[1.5rem] bg-c-500 text-white hover:scale-110 transition-all duration-200 first-letter: w-[2rem] h-[2rem] cursor-pointer items-center flex rounded-sm">
          <FaFacebookF />
        </span>
        <span className="text-[1.5rem] bg-c-500 text-white hover:scale-110 transition-all duration-200 first-letter: w-[2rem] h-[2rem] cursor-pointer items-center flex rounded-sm">
          <RiTwitterXFill />
        </span>
      </articl>
    </footer>
  );
};
export default Footer;
