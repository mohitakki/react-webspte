import React from "react";
import Slider from "react-slick";
import SingleReview from "./SingleReview";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    user: "Kathrin Joy",
    tour: "Unforgettable Turkey",
    image: "/images/user_3.jpg",
    comment: "I liked everything. The trip was full of events and excursions. Lots of impression from Istanbul and of course from Cappadocia"
   
  },
  {
    id: 1,
    user: "Eviana Tom",
    tour: "Awesome Greece",
    image: "/images/user_4.jpg",
    comment: "I liked everything. The trip was full of events and excursions. Lots of impression from Istanbul and of course from Cappadocia"

   
  },
  {
    id: 1,
    user: "Bill Peter",
    tour: "Amazing France",
    image: "/images/user_1.jpg",
    comment: "I liked everything. The trip was full of events and excursions. Lots of impression from Istanbul and of course from Cappadocia"

   
  },
  {
    id: 1,
    user: "Ovil Kay",
    tour: "Incredible India",
    image: "/images/User_2.jpg",
    comment: "I liked everything. The trip was full of events and excursions. Lots of impression from Istanbul and of course from Cappadocia"

   
  },
  {
    id: 1,
    user: "Dustina Tim",
    tour: "Beautiful Spain",
    image: "/images/user_3.jpg",
    comment: "I liked everything. The trip was full of events and excursions. Lots of impression from Istanbul and of course from Cappadocia"

   
  },
  
];


const Reviews = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  };
  return (
    <div>
      <div className=" lg:ml-24 lg:px-32">
        <h1 className="font-bold text-3xl mt-4 sm:ml-8">Reviews</h1>
        <h1 className="font-medium text-xl mt-4 sm:ml-8">What people say about us</h1>
        <div className="">
          <Slider {...settings}>
            {data.map((review) => {
              return <SingleReview slider={review} />;
            })}
          </Slider>
        </div>

        <div className="flex justify-end mt-10">
          <div>
            <button className="text-amber px-5 sm:mr-0 font-medium">All Reviews</button>
            <div className="w-24 h-1 bg-amber ml-10 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
