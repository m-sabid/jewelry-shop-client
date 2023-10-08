import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

const ProductInfo = () => {
  const [profileImg, setProfileImg] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=jewelry&client_id=MbE1XMj7pdRElJnfBN5e6QwLAPi9WegETpvvo5W92_Y";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProfileImg(data.results.map((dt) => dt.urls.small));
        setRandomIndex(Math.floor(Math.random() * data.results.length));
      });
  }, []);

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto header flex flex-col md:flex-row justify-center items-center overflow-hidden min-h-[100vh] ">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
            Feast from the Experts <br />
            <span className="text-orange-600">
              {" "}
              Ultimate jewelry collection.
            </span>
          </h1>
          <p className="my-5 w-full md:w-3/4 border-l-4 pl-2">
            Discover a world of flavors with "Feast from the Experts," featuring
            top jewelry from around the globe.
          </p>
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 rounded-lg mt-10 h-[400px] overflow-hidden flex items-center justify-center">
          <LazyLoad className="object-cover rounded-lg w-full" once>
            <img
              src={profileImg[randomIndex]}
              alt="Profile image"
              className="w-[100%]"
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
