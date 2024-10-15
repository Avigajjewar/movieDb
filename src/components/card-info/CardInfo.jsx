//card for movie details 

import React from "react";
import "./CardInfo.css";

const CardInfo = ({ details }) => {
   

  const date = details.release_date;
  const formatDate = date.toString();

  return (
    

    <div
      style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
        className="card-info"
        >
      <div className="card-info-top">
        <div className="card-left">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt=""
            />
        </div>
        <div className="card-right">
          <h1>{details.original_title} </h1>
          <h4>Rating : {Math.round(details.vote_average * 10) / 10}</h4>
          <div className="card-right-gen">
            <h3>93 min</h3>
            <h5>science,action</h5>
          </div>
          <h3>{formatDate}</h3>
        </div>
      </div>

      <div className="card-info-bottom">
        <h4>overview</h4>
        <p>{details.overview}</p>
      </div>
    </div>
           
  );
};

export default CardInfo;
