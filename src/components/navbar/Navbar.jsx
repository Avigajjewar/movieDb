import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setcategory, setsearch, search , handlesearch}) => {
  return (
    <div className="navbar">
      <Link to={"/"} onClick={() => setcategory("popular")} className="logo">
        <h1>MovieDb</h1>
      </Link>

      <div className="nav-right">
        <div className="nav-fun">
          <Link to={"/"} onClick={() => setcategory("popular")}>
            Popular
          </Link>
          <Link to={"/"} onClick={() => setcategory("top-rated")}>
            Top rated
          </Link>
          <Link to={"/"} onClick={() => setcategory("upcoming")}>
            Upcoming
          </Link>
        </div>

        <input
          placeholder="Movie Name"
          value={search}
          onChange={(e) =>  setsearch(e.target.value)}
          type="text"
        />
        <Link to={"/"}>
        <button onClick={()=>handlesearch()}>Search </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
