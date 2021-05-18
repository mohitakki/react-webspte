import React from "react";

const SingleReview = (props) => {
  const { user, image, tour, comment } = props.slider;
  return (
    <div className="">
      <div class="shadow  border-solid border-white border-2 px-10 mb-10 mt-10 mx-4">
        <div class="flex justify-center">
          <img
            src={image}
            class="rounded-full border-solid border-amber border-2 mt-4 h-28 w-28"
          />
        </div>
        <div class="text-center  pb-16 pt-2">
          <h3 class="text-black font-bold text-lg bold font-sans">
            <span className="text-gray">Tour</span> : {tour}
          </h3>
          <div className="mt-2">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="mt-2 font-sans font-light text-grey-dark">
            {comment}
          </p>
          <h1 className="font-medium mt-4 text-lg">{user}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
