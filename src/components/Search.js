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
