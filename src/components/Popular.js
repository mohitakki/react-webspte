import React from "react";
import SinglePopular from "./SinglePopular";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    name: "Vally Cappadocia",
    location: "Cappadocia, turkey",
    image: "/images/1.jpg",
  },
  {
    id: 2,
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    name: "Parthenon",
    location: "Athens, Greece",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    name: "Taj Mahal",
    location: "Agra, India",
    image: "/images/4.jpg",
  },
  {
    id: 5,
    name: "Statue of Liberty",
    location: "New York, USA",
    image: "/images/5.jpg",
  },
];

const width = window.outerWidth;

const Popular = () => {
  const [sliders, setSliders] = useState(1);

  const getWindowWidth = () => {
    console.log("screen size", width);
    if (width >= 1920) {
      setSliders(3);
    } else if (width >= 768) {
      setSliders(2);
    } else if (width <= 786) {
      setSliders(2);
    }
    else {
      setSliders(1);
    }
  };

  useEffect(() => {
    getWindowWidth();
    console.log("hello", width);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: sliders,
    slidesToScroll: 1,
  };
  return (
    <div className=" lg:ml-24 lg:px-32  sm:-mt-64 md:-mt-56 sm:px-2">
      <div className="w-56 h-1 lg:ml-10 lg:mt-24 bg-amber sm:mt-10 sm:ml-14"></div>
      <h1 className="font-bold text-3xl lg:ml-0 lg:mt-4 sm:mt-2 sm:ml-5">Popular Destinations</h1>
      <h1 className="font-medium text-xl mt-4 lg:ml-0 sm:ml-5">Choose what you like to best</h1>
      <Slider {...settings}>
        {data.map((slider) => {
          return <SinglePopular slider={slider} />;
        })}
      </Slider>

      <div className="text-right">
        <button className="border-2 border-amber px-5 lg:mr-48 sm:mr-5 py-2 font-medium">
          See More
        </button>
      </div>
    </div>
  );
};

export default Popular;
