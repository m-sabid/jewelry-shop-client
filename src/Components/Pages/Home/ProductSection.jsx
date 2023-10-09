import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import { base_url } from "../../Shared/urls";
import { Link } from "react-router-dom";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";

function ProductSection() {
  //useEffect
  useEffect(() => {
    AOS.init();
  }, []);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchPopularProducts();
  }, []);

  async function fetchPopularProducts() {
    try {
      const response = await axios.get(`${base_url}/api/all-products`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching popular Products", error);
    }
  }

  return (
    <div className="w-full mx-auto bg-gray-300 py-5">
      <div className="container">
        <h1 className="text-3xl font-bold my-3">Product Section</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {product.slice(0, 8).map((classItem, index) => (
            <div key={index} data-aos="zoom-in">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {classItem.title}
                  </h3>
                  <Link className="btn bg-primary text-white" to={"/products"}>
                    <FaShoppingCart /> Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
        <Link className="text-center bg-primary btn hover:bg-gray-800 mt-5 text-white" to={"/products"}>
          See more <FaAngleDown />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
