import React from "react";
import "./Castdetail.css";

const Castdetail = ({ a }) => {
     
    
  return (
    <div className="cast-detail">
      <div className="cast-cont">
        <div className="cast-container">
          <div className="cast-img">
            <img
              src={`https://image.tmdb.org/t/p/w500${a.profile_path}`}
              alt=""
            />
          </div>
          <div className="cast-name">
            <h5>{a.original_name}</h5>
            <h5>Charecter : {a.character}</h5>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Castdetail;
