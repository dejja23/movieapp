import React from "react";
import Stars from "./stars";

const MovieCard = ({ movies }) => {
  return (
    <div className="row justify-content-center">
      {movies.map((e, i) => (
        <div key={i} className="card border-success m-2 col-auto ">
          <div className="card-header bg-transparent">{e.title}</div>
          <div className="card-body border-success">
            <img src={e.img} />
          </div>
          <div className="card-footer bg-transparent">
            <Stars rating={e.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
