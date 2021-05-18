import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-between lg:mt-10 sm:mx-10">
        <div className="lg:w-1/2">
          <div className="lg:ml-24 lg:px-32">
            <h1 className="font-bold text-3xl mt-4">Contact Us</h1>
            <h1 className=" text-xl mt-4">
              Leave your phone number and we will call you back
            </h1>
            <div className="flex mt-10">
              <input placeholder="Phone number" className="px-10 shadow appearance-none border border-amber-light rounded" />
              <button className="bg-amber shadow appearance-none px-5 ml-4 text-white font-medium border-amber border-1">
                Send
              </button>
            </div>
            <div className="flex mt-10">
              <img src="/images/location.png" className="w-8" />
              <h1 className="inline-block align-middle font-medium mt-2 ml-2">
                Riyaadh, UAE - 325121
              </h1>
            </div>
            <div className="flex mt-4">
              <img src="/images/phone.png" className="w-8" />
              <h1 className="inline-block align-middle font-medium mt-2 ml-2">
                +375 4521365261
              </h1>
            </div>
            <div className="flex mt-4">
              <img src="/images/message.png" className="w-8" />
              <h1 className="inline-block align-middle font-medium mt-2 ml-2">
                info@demo.com
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div class="lg:px-8 pt-6 pb-8 mb-4 flex flex-col lg:mr-24">
            <div class="mb-3">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="mb-0">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="password"
              >
                Phone
              </label>
              <input
                class="shadow appearance-none border border-amber-light rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="phone"
                type="number"
                placeholder="Enter Your Phone"
              />
            </div>
            <div>
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                class="shadow appearance-none border border-amber-light rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="number"
                placeholder="Enter Your Message"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-amber shadow appearance-none hover:bg-blue-dark text-white font-medium py-2 px-4 rounded"
                type="button"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber w-full h-16 px-10 pt-2">
        <div className="flex lg:justify-around sm:justify-between">
          <div className="flex">
            <img src="/images/logo-white.png" />
            <div className="footer-logo text-white text-2xl font-medium mt-2 ml-2">
              Palm Tour{" "}
            </div>
          </div>
          <div className="lg:flex mt-3 sm:hidden">
           <div className="text-white font-medium mx-2">Home</div>
           <div className="text-white font-medium mx-2">Our Tours</div>
           <div className="text-white font-medium mx-2">Special Offers</div>
           <div className="text-white font-medium mx-2">Reviews</div>
           <div className="text-white font-medium mx-2">Contacts</div>
          </div>
          <div className="flex mt-3">
            <img src="/images/twitter-white.png" className="w-6 h-6 mx-3"/>
            <img src="/images/facebook-white.png" className="w-6 h-6 mx-3"/>
            <img src="/images/instagram-white.png" className="w-6 h-6 mx-3"/>
            <img src="/images/behance-white.png" className="w-6 h-6 mx-3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
