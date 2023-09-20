import React, { useEffect, useReducer, useState } from "react";
import { useGlobalContext } from "../Context";
import { Category, Card, Model, BackgroundProduct, BannerBar } from "../Components";
const Product = () => {
  const { getData, data, setData, filter} = useGlobalContext();
  useEffect(() => {
    if (filter === "all") {
      setData(getData);
    } else {
      const getFilter = getData.filter((d) => d.category === filter);
      setData(getFilter);
    }
  }, [filter]);
  return (
    <section>
      <div className="h-[50rem] relative">
        <BackgroundProduct/>
        <Model/>
      </div>
      <BannerBar/>
      <Category />
      <div className="flex flex-wrap w-[80%] justify-center mx-auto gap-[2rem] ">
        {data.map(
          ({ image, id, title, price, description, category, rating }) => (
            <Card
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              description={description}
              category={category}
              rating={rating}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Product;
