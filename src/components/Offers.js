import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import SingleOffers from "./SingleOffers";

const data = [
  {
    id: 1,
    name: "Vally of Cappadocia",
    location: "Cappadocia, turkey",
    image: "/images/6.jpg",
    from: "30.03.2021",
    flight: "Kiav",
    breakfast: "Breakfast is included",
    price: "600",
  },
  {
    id: 2,
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    image: "/images/7.jpeg",
    from: "12.07.2021",
    flight: "Kiav",
    breakfast: "Breakfast is included",
    price: "800",
  },
  {
    id: 3,
    name: "Parthenon",
    location: "Athens, Greece",
    image: "/images/8.jpg",
    from: "24.03.2021",
    flight: "Kiav",
    breakfast: "Breakfast is not included",
    price: "600",
  },
  {
    id: 4,
    name: "Taj Mahal",
    location: "Agra, India",
    image: "/images/4.jpg",
    from: "01.06.2021",
    flight: "Kiav",
    breakfast: "Breakfast is included",
    price: "400",
  },
  {
    id: 5,
    name: "Statue of Liberty",
    location: "New York, USA",
    image: "/images/5.jpg",
    from: "18.03.2021",
    flight: "Kiav",
    breakfast: "Breakfast is included",
    price: "1000",
  },
];
const width = window.outerWidth;

const Offers = () => {
  const [sliders, setSliders] = useState(1);

  const getWindowWidth = () => {
    console.log("screen size", width);
    if (width >= 1920) {
      setSliders(3);
    } else if (width >= 768) {
      setSliders(1);
    } else if (width <= 786) {
      setSliders(1);
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
    <div>
      <div className="md:ml-10 lg:px-32 sm:ml-8">
        <div className="w-32 h-1 mt-10 ml-10 bg-amber"></div>
        <h1 className="font-bold text-3xl mt-4">Special Offers</h1>
        <h1 className="font-medium text-xl mt-4">
          We have collected for you the best offers this month
        </h1>
        <Slider {...settings}>
          {data.map((offer) => {
            return <SingleOffers slider={offer} />;
          })}
        </Slider>

        <div className="text-right">
          <button className="border-2 border-amber px-5 lg:mr-48 py-2 font-medium sm:mr-6">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
