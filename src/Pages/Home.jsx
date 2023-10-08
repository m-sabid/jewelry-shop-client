import React from "react";
import HeaderSlider from "../Components/Pages/Home/HeaderSlider";
import PopularItems from "../Components/Pages/Home/PopularItems";
import ProductInfo from "../Components/Pages/Home/ProductInfo";
import UsersReviews from "../Components/Pages/Home/ReviewCard";

function Home() {
  return (
    <>
      <HeaderSlider />
      <PopularItems />
      <ProductInfo />
      <UsersReviews />
    </>
  );
}

export default Home;
