import React, { useRef } from "react";
import "../Styles/Card.css";
import { AiOutlineHeart } from "react-icons/ai";
const Card = ({ image, id, title, price, description, category, rating }) => {
  const btn = useRef(null);
  const handleClick = () =>{
    btn.current.classList.toggle("show")
  }
  return (
    <div className="card w-[17rem] ">
      <div className="flex transition-all duration-200 ease-out overflow-hidden items-center justify-center bg-gray-50 h-[20rem]">
        <img
          className="w-[12rem] transition-all duration-[.3s] h-[12rem] object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex h-[9rem] justify-between pt-[1rem]">
        <div className="w-[80%] flex flex-col gap-[.5rem]">
          <h3 className="text-[1.2rem]">{title}</h3>
          <p>$ {price}</p>
        </div>
        <div>
          <span onClick={handleClick} className="text-[1.5rem] cursor-pointer" ref={btn} >
            <AiOutlineHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
