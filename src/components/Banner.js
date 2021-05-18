import React from "react";

var mainImage = {
  backgroundImage: `url(${"/images/main.jpg"})`,
};
const Banner = () => {
  // var h = document.documentElement,
  //   b = document.body,
  //   st = "scrollTop",
  //   sh = "scrollHeight",
  //   progress = document.querySelector("#progress"),
  //   scroll;
  // var scrollpos = window.scrollY;
  // var header = document.getElementById("header");
  // var navcontent = document.getElementById("nav-content");

  // document.addEventListener("scroll", function () {
  //   scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  //   progress.style.setProperty("--scroll", scroll + "%");
  //   scrollpos = window.scrollY;

  //   if (scrollpos > 10) {
  //     header.classList.add("bg-black");
  //     navcontent.classList.remove("bg-black");
  //     navcontent.classList.add("bg-black");
  //   } else {
  //     header.classList.remove("bg-black");
  //     navcontent.classList.remove("bg-black");
  //     navcontent.classList.add("bg-black");
  //   }
  // });

  // document.getElementById("nav-toggle").onclick = function () {
  //   document.getElementById("nav-content").classList.toggle("hidden");
  // };

  return (
    <>
      <div
        className="h-12 w-full h-screen bg-gradient-to-r 
                from-yellow-400 via-green-500 to-blue-500"
        style={mainImage}
      >
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="flex justify-between items-center py-4 px-6 "
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <img className="h-10 w-auto sm:h-10" src="/images/logo.png" />
                </a>
                <div class="block lg:hidden pr-4" id="nav-content">
                  <button
                    id="nav-toggle"
                    class="flex items-center px-3 py-2 text-yellow-300 border-gray-600 focus:outline-none"
                  >
                    <svg
                      fill="text-yellow-300"
                      viewBox="0 0 20 20"
                      class="w-6 h-6 fill-current"
                    >
                      <title>Menu</title>
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
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
        <div className="">
          <div className="lg:flex lg:justify-around lg:mx-10 lg:mt-28 sm:mt-20">
            <div className="content-end">
              <h1 className="lg:font-medium lg:text-3xl sm:text-xl md:text-2xl text-white relative pt-16 px-4 sm:px-6 lg:px-8">
                Start Your Journey with us _________
              </h1>
              <h1 className="lg:font-medium sm:font-medium lg:text-7xl sm:text-5xl text-white relative pt-6 px-4 sm:px-6 lg:px-8">
                This will be your unforgettable
                <span className="text-amber"> journey</span>
              </h1>
              <h1 className="lg:font-medium sm:font-medium lg:text-5xl sm:text-2xl text-white ml-8 mt-6">
                Online booking <span className="text-amber">24/7</span>
              </h1>
              <button className="border-0 bg-amber mt-6 ml-8 border-amber lg:px-10 sm:px-6 lg:py-3 sm:py-2 text-white  lg:font-medium">
                Choose tour
              </button>
              <div className="lg:block sm:hidden">
                <div className="verticle-line ml-28"></div>
                <div className="verticle-line ml-28 h-5 mt-1"></div>
                <div className="verticle-line ml-28 h-5 mt-1"></div>
                <div className="verticle-line ml-28 h-5 mt-1"></div>
                <div className="verticle-line ml-28 h-5 mt-1"></div>
                <div className="verticle-line ml-28 h-5 mt-1"></div>
                <div className="verticle-line ml-28 h-5 mt-1"></div>
                <div className="verticle-line ml-28 h-5 mt-1"></div>
              </div>
            </div>
            <div className="lg:py-5 lg:block sm:hidden">
              <div className="verticle-line ml-3 h-12 my-3"></div>
              <img src="/images/twitter.png" />
              <div className="verticle-line ml-3 h-5 my-3"></div>
              <img src="/images/facebook.png" />
              <div className="verticle-line ml-3 h-5 my-3"></div>
              <img src="/images/instagram.png" />
              <div className="verticle-line ml-3 h-5 my-3"></div>
              <img src="/images/behance.png" />
              <div className="verticle-line ml-3 h-12 my-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
