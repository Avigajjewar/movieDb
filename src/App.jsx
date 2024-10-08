import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Upcoming from "./pages/upcoming/Upcoming";
import CardInfo from "./components/card-info/CardInfo";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

const App = () => {
  const [category, setcategory] = useState("home");
  const [details, setdetails] = useState();
  const [search, setsearch] = useState();

  function handlesearch() {
    setcategory("searched");
  }

  return (
    <>
      <div>
        <Navbar
          setsearch={setsearch}
          search={search}
          handlesearch={handlesearch}
          setcategory={setcategory}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home setdetails={setdetails} search={search} category={category} />
          }
        />
        <Route
          path="/movie-details"
          element={<MovieDetail details={details} />}
        />
      </Routes>
    </>
  );
};

export default App;
