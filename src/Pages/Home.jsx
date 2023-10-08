import React from "react";
import HeaderSlider from "../Components/Pages/Home/HeaderSlider";
import PopularItems from "../Components/Pages/Home/PopularItems";
import ProductInfo from "../Components/Pages/Home/ProductInfo";
import ProductSection from "../Components/Pages/Home/ProductSection";
import UsersReviews from "../Components/Pages/Home/ReviewCard";
import ShopInfo from "../Components/Pages/Home/ShopInfo";

function Home() {
  return (
    <>
      <HeaderSlider />
      <PopularItems />
      <ProductInfo />
      <ShopInfo />
      <ProductSection />
      <UsersReviews />
    </>
  );
}

export default Home;
