import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiShoppingCartFull, TfiLoop } from "react-icons/tfi";
const BannerBar = () => {
  return (
    <section className="flex justify-center mb-[6rem]">
      <div className="flex w-[70%] px-[3rem] py-[1.5rem] shadow-md bg-white absolute z-[100] -mt-[3rem] justify-between">
        <article className="flex gap-[1rem] cursor-pointer transition-all duration-200 hover:bg-c-50 p-[.5rem] rounded-md">
          <span className="text-[2.2rem] text-c-500">
            <LiaShippingFastSolid />
          </span>
          <div className="w-[18rem]">
            <h3 className="text-[1.3rem] text-c-950">Free Shipping</h3>
            <span className="text-c-300">Suffered Alteration in Some Form</span>
          </div>
        </article>
        <article className="flex gap-[1rem] cursor-pointer transition-all duration-200 hover:bg-c-50 p-[.5rem] rounded-md">
          <span className="text-[2.2rem] text-c-500">
            <TfiShoppingCartFull />
          </span>
          <div className="w-[18rem]">
            <h3 className="text-[1.3rem] text-c-950">Cash on Delivery</h3>
            <span className="text-c-300">The internet Tend To Repeat</span>
          </div>
        </article>
        <article className="flex gap-[1rem] cursor-pointer transition-all duration-200 hover:bg-c-50 p-[.5rem] rounded-md">
          <span className="text-[2.2rem] text-c-500">
            <TfiLoop />
          </span>
          <div className="w-[18rem]">
            <h3 className="text-[1.3rem] text-c-950">30 Days Returns</h3>
            <span className="text-c-300">Making it Look Like Readable</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BannerBar;
