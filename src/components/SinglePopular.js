import React from "react";

const SinglePopular = (props) => {
  const { name, image, location } = props.slider;

  return (
    <div>
      <div className="sm:px-1">
        <div class="lg:max-w-sm sm:w-11/12 sm:h-full max-h-xl rounded lg:overflow-hidden shadow my-10 lg:ml-4 sm:ml-3">
          <img class="w-96 h-96" src={image} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold bg-transparent lg:text-xl sm:text-lg">{name}</div>
            <p class="text-grey-darker bg-transparent text-base">
              <div class="font-medium bg-transparent md:text-xl  mb-2">
                {location}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePopular;
