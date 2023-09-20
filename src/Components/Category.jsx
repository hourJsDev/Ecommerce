import React from "react";
import { useGlobalContext } from "../Context";

const Category = () => {
    const {setFilter} = useGlobalContext()
  return (
    <nav className="flex justify-between py-[2rem] w-[74%] mx-auto ">
      <ul className="flex gap-[2rem]">
        <li onClick={()=> setFilter("all")} className="text-[1.3rem] capitalize before:w-0 text-c-700 hover:before:w-full before:duration-200 before:transition-all before:bg-c-700 before:h-[2.5px] relative before:absolute before:top-[90%] cursor-pointer"> 
          All Product
        </li>
        <li onClick={()=> setFilter("men's clothing")} className="text-[1.3rem] capitalize before:w-0 text-c-700 hover:before:w-full before:duration-200 before:transition-all before:bg-c-700 before:h-[2.5px] relative before:absolute before:top-[90%] cursor-pointer">
          men's clothing{" "}
        </li>
        <li onClick={()=> setFilter("electronics")} className="text-[1.3rem] capitalize before:w-0 text-c-700 hover:before:w-full before:duration-200 before:transition-all before:bg-c-700 before:h-[2.5px] relative before:absolute before:top-[90%] cursor-pointer">
          electronics
        </li>
        <li onClick={()=> setFilter("women's clothing")} className="text-[1.3rem] capitalize before:w-0 text-c-700 hover:before:w-full before:duration-200 before:transition-all before:bg-c-700 before:h-[2.5px] relative before:absolute before:top-[90%] cursor-pointer">
          women's clothing
        </li>
      </ul>
      <ul className="flex gap-[1rem]">
        <li className="text-[1.3rem] capitalize before:w-0 text-c-700 hover:before:w-full before:duration-200 before:transition-all before:bg-c-700 before:h-[2.5px] relative before:absolute before:top-[90%] cursor-pointer">
          Filter
        </li>
        <li className="text-[1.3rem] capitalize before:w-0 text-c-700 hover:before:w-full before:duration-200 before:transition-all before:bg-c-700 before:h-[2.5px] relative before:absolute before:top-[90%] cursor-pointer">
          Search
        </li>
      </ul>
    </nav>
  );
};

export default Category;
