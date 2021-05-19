import React, { useState } from "react";

var mainImage = {
  backgroundImage: `url(${"/images/main.jpg"})`,
};

const Banner = () => {
  const [toggle, setToggle] = useState(false);

  // handleToggle = () => {
  //   setToggle(toggle);
  // };
  return (
    <>
      <div
        className="w-full h-screen bg-gradient-to-r 
                from-yellow-400 via-green-500 to-blue-500"
        style={mainImage}
      >
        <div className="relative md:px-4 sm:px-6 md:bg-transparent">
          <nav
            className="flex justify-between items-center md:py-4 md:px-1"
            aria-label="Global"
          >
            <div className="flex items-center flex-shrink-0 flex-grow-0">
              {/* <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <img
                    className="h-10 w-auto sm:h-10 xs:block"
                    src="/images/logo.png"
                  />
                </a>
              </div> */}
            </div>
            
            <div className="hidden flex flex-col md:flex md:flex-row md:ml-10 md:pr-4 md:space-x-8">
              <a
                href="#"
                className="font-medium text-white hover:text-amber border-t-2 border-amber"
              >
                Home
              </a>

              <a href="#" className="font-medium text-white hover:text-amber">
                Our Tour
              </a>

              <a href="#" className="font-medium text-white hover:text-amber">
                Special Offers
              </a>

              <a href="#" className="font-medium text-white hover:text-amber">
                Reviews
              </a>

              <a href="#" className="font-medium text-white hover:text-amber">
                Contacts
              </a>
            </div>
          </nav>
        </div>
        <div className="mt-56 md:mt-16">
          <div className="flex lg:justify-between sm:justify-around md:mt-24 mx-5 sm:mt-20">
            <div className="">
              <h1 className="font-medium lg:text-lg text-sm sm:text-xl text-white relative pt-2 sm:px-6">
                Start Your Journey with us _________
              </h1>
              <h1 className="md:font-medium lg:text-gray-light sm:font-medium lg:text-4xl sm:text-5xl text-white relative pt-6 sm:px-6 px-8">
                This will be your unforgettable
                <span className="text-amber"> journey</span>
              </h1>
              <h1 className="lg:font-medium sm:font-medium lg:text-4xl sm:text-2xl text-white ml-6 mt-6">
                Online booking <span className="text-amber">24/7</span>
              </h1>
              <button className="border-0 rounded bg-amber mt-6 ml-8 border-amber lg:px-10 sm:px-6 lg:py-3 sm:py-2 text-white  lg:font-medium">
                Choose tour
              </button>
              <div className="sm:block hidden">
                <div className="verticle-line ml-28"></div>
                <div className="verticle-line ml-28 h-4 mt-1"></div>
                <div className="verticle-line ml-28 h-4 mt-1"></div>
                <div className="verticle-line ml-28 h-4 mt-1"></div>
                <div className="verticle-line ml-28 h-4 mt-1"></div>
                <div className="verticle-line ml-28 h-4 mt-1"></div>
                <div className="verticle-line ml-28 h-4 mt-1"></div>
              </div> 
            </div>
            <div className="lg:py-5 hidden sm:block space-y-1 ">
              <div className="verticle-line ml-2 h-8 my-2"></div>
              <img
                className="w-4 h-4 "
                src="/images/twitter.png"
              />
              <div className="verticle-line ml-2 h-5"></div>
              <img className="w-4 h-4" src="/images/facebook.png" />
              <div className="verticle-line ml-2 h-5"></div>
              <img className="w-4 h-4" src="/images/instagram.png" />
              <div className="verticle-line ml-2 h-5"></div>
              <img className="w-4 h-4" src="/images/behance.png" />
              <div className="verticle-line ml-2 h-12"></div>
            </div>
          </div>
          <div class="relative bottom-32 max-w-lg mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden mt-12  md:max-w-full z-auto" >
           <div class="md:flex">
    <div class="md:flex-shrink-0">
    <div className="lg:flex justify-around lg:p-10 sm:p-2">
            <div className="lg:flex sm:flex sm:justify-around">
              <div className="form">
                <h3 className="text-amber-dark">Destination</h3>
                <input
                  placeholder="France"
                  className="bg-gray-lightest pl-3 mt-2"
                />
              </div>
              <div className="form lg:ml-32">
                <h3>Check In</h3>
                <input
                  type="date"
                  placeholder="France"
                  className="bg-gray-lightest pl-3 mt-2"
                />
              </div>
            </div>
            <div className="lg:flex sm:flex sm:justify-around sm:mt-5 lg:mt-0">
              <div className="form">
                <h3 className="text-amber-dark">Check Out</h3>
                <input
                  type="date"
                  placeholder="France"
                  className="bg-gray-lightest lg:pl-3 sm:pl-4 sm:px-5 mt-2"
                />
              </div>
              <div className="form lg:ml-32">
                <h3 className="text-amber-dark">Adults</h3>
                <select className="bg-gray-lightest px-16 py-2 mt-2 sm:pl-4 sm:px-36 mt-2 ">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div className="flex md:ml-8">
            <div className="form sm:mt-5 sm:ml-2 lg:mt-0 ">
              <h3 className="text-amber-dark">Children</h3>
              <select className="bg-gray-lightest px-16 py-2 mt-2 sm:px-24">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="form lg:mt-6 sm:ml-2 sm:mt-2 md:mt-11 md:w-11 md:ml-24 sm:mt-11 sm:ml-10" >
              <img src="/images/search.png" />
            </div>
            </div>
          </div>
    </div>
    <div class="p-8">
    
      </div>
  </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
