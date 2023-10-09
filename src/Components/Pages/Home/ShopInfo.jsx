import React, { useEffect, useState } from "react";
import { FaAlignLeft, FaHandPointLeft, FaHandPointRight } from "react-icons/fa";

const ShopInfo = ({ name, ingredients, image }) => {
  const [profileImg, setProfileImg] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=jewellery-shops&client_id=MbE1XMj7pdRElJnfBN5e6QwLAPi9WegETpvvo5W92_Y";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProfileImg(data.results.map((dt) => dt));
        setRandomIndex(Math.floor(Math.random() * data.results.length));
      });
  }, []);

  return (
    <>
      <div className="h-[70vh]">
        <div className="relative h-[70vh]">
          <div
            className="absolute capitalize top-0 left-0 w-full h-[70vh] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${profileImg[randomIndex]?.urls.small})`,
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-[70vh] flex justify-center items-center">
              <h1 className="text-4xl font-bold text-white text-center">
                {profileImg[randomIndex]?.alt_description}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold mb-4 capitalize text-primary">
              {profileImg[randomIndex]?.alt_description}:
            </h2>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex items-center">
                <span className="mr-5 text-2xl">
                  <FaHandPointRight />{" "}
                </span>

                <span className="text-gray-700">
                  <b className="text-secondary">Diverse Jewelry Collection:</b> <p className="border-l-4 pl-3 ml-3"> Our store boasts a vast
                  assortment of jewelry, from stunning rings and necklaces to
                  exquisite earrings and bracelets. We offer a wide range of
                  styles and materials, including precious metals like gold,
                  silver, and platinum, adorned with radiant gemstones such as
                  diamonds, emeralds, sapphires, and pearls.
                  </p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-5 text-2xl">
                  <FaHandPointRight />{" "}
                </span>

                <span className="text-gray-700">
                  <b className="text-secondary">Customization Services:</b> <p className="border-l-4 pl-3 ml-3"> We understand the significance
                  of personalization. Create one-of-a-kind pieces with our
                  customization options. Select your preferred metals,
                  gemstones, and settings. Our skilled artisans will craft
                  jewelry that reflects your unique style and emotions, from
                  custom engagement rings to personalized gifts.
                  </p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-5 text-2xl">
                  <FaHandPointRight />{" "}
                </span>
                <span className="text-gray-700">
                  <b className="text-secondary">Expert Guidance and Appraisals:</b> <p className="border-l-4 pl-3 ml-3"> Our knowledgeable staff
                  and gemologists provide expert advice. Whether you're seeking
                  assistance with a significant purchase or jewelry appraisal,
                  we're here to help. Understand the quality and value of your
                  jewelry with our guidance. Trust us for informed decisions.
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopInfo;
