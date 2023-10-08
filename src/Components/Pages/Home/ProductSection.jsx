import React, { useEffect, useState } from "react";
import AOS from "aos";

function ProductSection() {
  //useEffect
  useEffect(() => {
    AOS.init();
  }, []);

  const [product, setProduct] = useState([]);


  return (
    <div className="w-full mx-auto bg-gray-300">
      <div className="container">
        <h1 className="text-3xl font-bold">Product Section</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {product.slice(0, 6).map((classItem, index) => (
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
                  <p className="flex items-center text-gray-600">
                    <span className="bg-gray-200 px-2 rounded-full mr-1">
                      <FiEye />
                    </span>
                    <i>{classItem.students} Buy</i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
