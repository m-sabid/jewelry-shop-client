import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEye, FiUsers } from "react-icons/fi";
import { base_url } from "../../Shared/urls";
import AOS from "aos";

const PopularItems = () => {  
    //useEffect
    useEffect(() => {
      AOS.init();
    }, []);
    
    // states
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetchPopularClasses();
  }, []);

  async function fetchPopularClasses() {
    try {
      const response = await axios.get(`${base_url}/api/popular-classes`);
      setPopularItems(response.data);
    } catch (error) {
      console.error("Error fetching popular classes", error);
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Popular Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularItems.slice(0,6).map((item, index) => (
          <div key={index} data-aos="zoom-in">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="flex items-center text-gray-600">
                  <span className="bg-gray-200 px-2 rounded-full mr-1">
                    <FiEye />
                  </span>
                  <i>{item.students} Buy</i>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
