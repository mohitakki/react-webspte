import React from "react";

function dateDisplay() {
  var x = document.getElementById("dob").value;
  document.getElementById("demo").innerHTML = x;
}

const Search = () => {
  return (
    <div>
      <div className="max-w-full lg:mx-10 sm:mx-8 max-h-50 sm:p-10 bg-white shadow-lg lg:rounded-full sm:rounded relative lg:bottom-60 sm:bottom-96">
        <div>
          <div className="lg:flex justify-around p-4 sm:p-2">
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
                  placeholder={dateDisplay}
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
      </div>
      {/* <div class="flight-engine m-0 flex shadow-xl sm:h-lg">
        <div class="container sm:h-lg">
          <div class="tabing">
            <div className="flex justify-around p-8">
              <div className="form">
                <h3 className="text-amber-dark">Destination</h3>
                <input
                  placeholder="France"
                  className="bg-gray-lightest pl-3 mt-2"
                />
              </div>
              <div className="form">
                <h3>Check In</h3>
                <input
                  type="date"
                  placeholder={dateDisplay}
                  className="bg-gray-lightest pl-3 mt-2"
                />
              </div>
              <div className="form">
                <h3 className="text-amber-dark">Check Out</h3>
                <input
                  type="date"
                  placeholder="France"
                  className="bg-gray-lightest pl-3 mt-2"
                />
              </div>
              <div className="form">
                <h3 className="text-amber-dark">Adults</h3>
                <select className="bg-gray-lightest px-16 py-2 mt-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="form">
                <h3 className="text-amber-dark">Children</h3>
                <select className="bg-gray-lightest px-16 py-2 mt-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="form mt-6">
                <img src="/images/search.png" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
