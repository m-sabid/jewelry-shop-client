import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ name, rating, review }) => {
  const stars = Array.from({ length: 5 }).map((_, index) => {
    const isFilled = index < rating;
    return (
      <FaStar
        key={index}
        className={`text-yellow-400 ${isFilled ? "fill-current" : ""}`}
      />
    );
  });

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden mx-4 w-72 h-72 flex flex-col items-center justify-center p-6">
      <div className="text-lg font-bold">{name}</div>
      <div className="flex items-center">{stars}</div>
      <div className="mt-2 text-gray-500">{review}</div>
    </div>
  );
};

const UsersReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae erat ac magna bibendum vehicula quis vel purus.",
    },
    {
      id: 2,
      name: "Jane Doe",
      rating: 5,
      review:
        "Suspendisse eget augue vitae quam hendrerit consectetur. Nam vel libero nec felis lacinia bibendum.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rating: 3,
      review:
        "Curabitur vel nunc eu quam venenatis bibendum. Nam at mauris in ipsum accumsan consectetur.",
    },
    {
      id: 1,
      name: "John Smith",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae erat ac magna bibendum vehicula quis vel purus.",
    },
    {
      id: 2,
      name: "Jane Doe",
      rating: 5,
      review:
        "Suspendisse eget augue vitae quam hendrerit consectetur. Nam vel libero nec felis lacinia bibendum.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rating: 3,
      review:
        "Curabitur vel nunc eu quam venenatis bibendum. Nam at mauris in ipsum accumsan consectetur.",
    },
  ];

  return (
    <div className="my-10 h-[100vh] flex flex-col justify-center">
    
        <h2 className="text-3xl font-bold my-10 border-b-2 max-w-fit mx-auto">
          Customers Reviews
        </h2>
        <Marquee gradient={false}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </Marquee>
      </div>
  );
};

export default UsersReviews;
