import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Offers from "./components/Offers";
import Popular from "./components/Popular";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      
      {/* BANNER PART */}
      <Banner />
      {/* SEARCH PART */}

      <Search />
      {/* POPULAR DESTINATION */}

      <Popular />
      {/* SPECIAL OFFERS */}

      <Offers />
      {/* REVIEWS PART*/}

      <Reviews />
      {/* FOOTER PART */}

      <Footer />
    </div>
  );
}

export default App;
