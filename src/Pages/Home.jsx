import React from "react";
import { HomeBanner, UserAccessBtn } from "../Components";
import Image from "../assets/BlackFriday-bro.png";
import "../Styles/Amation.css";
const Home = () => {
  return (
    <section className="flex flex-col mt-[3rem]">
      <div className="mx-auto text-center flex items-center flex-col gap-[1.5rem]">
        <h1 className="animation-rotate-left text-[6rem] font-medium">
          No.1 ecommerce app
        </h1>
        <p className="text-[1.2rem] animation-rotate-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          explicabo <br /> cum cupiditate illum quis dolores?
        </p>
        <div className="animation-rotate-left">
          <UserAccessBtn />
        </div>
      </div>
      <div className="mx-auto animation-rotate-right ">
        <img className="w-[40%] mx-auto" src={Image} alt="BlackFriday" />
      </div>
      <HomeBanner />
    </section>
  );
};

export default Home;
