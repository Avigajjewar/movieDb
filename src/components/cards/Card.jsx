import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ a, setdetails }) => {
  const seta = () => {
    setdetails(a);
  };

  return (
    <Link to={"/movie-details"} onClick={() => seta()} className="card">
      <div className="card-thumb">
        <img src={`https://image.tmdb.org/t/p/w500${a.poster_path}`} alt="" />
      </div>

      <div className="card-infor">
        <h2>{a.title}</h2>
        <h4>Rating : {Math.round(a.vote_average * 10) / 10}</h4>
      </div>
    </Link>
  );
};

export default Card;
