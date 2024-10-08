import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import CardInfo from "../../components/card-info/CardInfo";
import { API_KEY } from "../../data";
import Castdetail from "../../components/Castdetail/Castdetail";
import Card from "../../components/cards/Card";

const MovieDetail = ({ details }) => {
  const [cast, setcast] = useState([]);

  const fetchdetails = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/${details.id}/credits?api_key=${API_KEY}&language=en-US
`)
      .then((Response) => Response.json())
      .then((data) => setcast(data.cast));
  };

  useEffect(() => {
    return () => {
      fetchdetails();
    };
  }, []);

  return (
    <div className="details">
      <CardInfo details={details} />
      <h2 className="cast">Cast</h2>
      <hr /> 
      <div className="det-container">
        {cast.map((a, index) => {
          return <Castdetail key={index} a={a} />;
        })}
      </div>
    </div>
  );
};

export default MovieDetail;
