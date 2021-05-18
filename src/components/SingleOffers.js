import React from "react";

const SingleOffers = (props) => {
  const { name, image, location, from, flight, price, breakfast } =
    props.slider;
  return (
    <div>
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow my-10 bg-amber-lightest sm:ml-20 md:ml-36 lg:ml-4">
          <img
            className="w-96 h-96"
            src={image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">{location}</h1>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            {/* <h1 class="font-medium bg-transparent text-base mb-2">
              {location}
            </h1> */}
            <div className="flex mt-4">
              <span className="fa fa-calendar mt-1"></span>
              <p className="font-medium ml-2">{from}</p>
              <p className="font-medium ml-2 text-green"> - 2 Days</p>
            </div>
            <div className="flex my-2">
              <span className="fa fa-plane mt-1"></span>
              <p className="font-medium ml-2">Flight from {flight}</p>
            </div>
            <div className="flex">
              <span className="fa fa-coffee mt-1"></span>
              <p className="font-medium ml-2">{breakfast}</p>
            </div>
            <div className="flex justify-between my-2">
             <div className="flex mt-2">
             <p className="font-medium">From</p>
              <p className="font-medium ml-2 text-green">${price}</p>
             </div>
              <button className="bg-amber py-2 px-3 text-white font-medium">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOffers;
