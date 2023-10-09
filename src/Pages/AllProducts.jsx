import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaChevronCircleRight, FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SiteHeaderTitle from "../Components/Shared/SiteHeaderTitle";
import { AuthContext } from "../providers/AuthProvider";
import { base_url } from "../Components/Shared/urls";
import AOS from "aos";

const AllProducts = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
  }, []);

  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: products = [], refetch } = useQuery(["products"], async () => {
    const res = await axiosSecure.get(`/api/all-products`);
    return res.data;
  });

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    fetchUserRole();
  }, []);

  async function fetchUserRole() {
    try {
      const response = await axios.get(`${base_url}/users`);
      const foundUser = response.data.find((dt) => dt.email === user?.email);
      console.log(foundUser.role)
      if (foundUser) {
        setUserRole(foundUser.role);
      }
    } catch (error) {
      console.error("Error fetching user role", error);
    }
  }

  const handleSelectClass = async (addedProducts) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized Access",
        text: "You are logged in as an admin or instructor. Selecting a class is not allowed.",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    try {
      const response = await axios.post(`${base_url}/api/products/cart`, {
        title: addedProducts.title,
        id: addedProducts._id,
        seats: addedProducts.seats,
        price: addedProducts.price,
        image: addedProducts.image,
        instructorName: addedProducts.instructorName,
        instructorEmail: addedProducts.instructorEmail,
        students: addedProducts.students,
        userName: user.displayName,
        email: user.email,
      });

      Swal.fire({
        icon: "success",
        title: "Product Added",
        text: "The Product has been added to your cart successfully.",
      });
    } catch (error) {
      let errorMessage =
        "An error occurred while adding the Product to the cart.";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  };

  return (
    <div>
      <SiteHeaderTitle title={"All Products"} />

      <div className="container my-10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {products.map((res, index) => (
          <div key={index} data-aos="zoom-in">
            <div className="">
              <div
                className={`card card-compact w-full ${
                  res.seats === 0 ? "bg-red-500" : "bg-base-100"
                } shadow-xl`}
              >
                <figure>
                  <img
                    src={res.image}
                    alt="Shoes"
                    className="h-44 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-blue-500">{res.title}</h2>                
                  <hr />
                  <ul className="my-2 bg-gray-100 p-3 rounded-md">
                    <li className="flex items-center gap-2 ml-2">
                      <FaChevronCircleRight /> <strong> Price: </strong>$
                      {res.price}
                    </li>
                    <li className="flex items-center gap-2 ml-2">
                      <FaChevronCircleRight /> <strong> Quantity: </strong>
                      {res.quantity}
                    </li>
                  </ul>
                  <hr />
                  <button
                    className="btn bg-primary text-white"
                    onClick={() => handleSelectClass(res)}
                    disabled={
                      res.quantity === 0 ||
                      userRole === "admin"
                    }
                  >
                    <FaShoppingCart /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
