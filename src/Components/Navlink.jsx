import React from "react";
import { Link } from "react-router-dom";
const Navlink = () => {
  return (
    <ul className="flex items-center gap-[2rem]">
      <li className="text-[1.5rem] before:w-0 text-black hover:before:w-full before:duration-200 before:transition-all before:bg-black before:h-[2.5px] relative before:absolute before:top-[90%]">
        <Link to="home">Home</Link>
      </li>
      <li className="text-[1.5rem] before:w-0 text-black hover:before:w-full before:duration-200 before:transition-all before:bg-black before:h-[2.5px] relative before:absolute before:top-[90%]">
        <Link to="product">Products</Link>
      </li>
      {/* <li className="text-[1.5rem] before:w-0 text-black hover:before:w-full before:duration-200 before:transition-all before:bg-black before:h-[2.5px] relative before:absolute before:top-[90%]">
        <Link to="services">Services</Link>
      </li> */}
      <li className="text-[1.5rem] before:w-0 text-black hover:before:w-full before:duration-200 before:transition-all before:bg-black before:h-[2.5px] relative before:absolute before:top-[90%]">
        <Link to="about">About</Link>
      </li>
    </ul>
  );
};

export default Navlink;
