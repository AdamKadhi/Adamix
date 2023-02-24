import React, { useState } from "react";
import ReactStars from "react-stars";
import MovieModal from "./MovieModal";

const Moviecard = ({movie}) => {
  const [showMovie,setShowMovie]=useState(false);
  return (
    <div>
    <div className="card" onClick={()=>(setShowMovie(!showMovie))}>
      <img src={movie.image} alt=""  />
      <div className="descriptions" >
        <h1>{movie.name}</h1>
        <p> {movie.genre}</p>
        <ReactStars
          className="stars"
          count={5}
          size={24}
          color2={"#ffd700"}
          edit={false}
          value={movie.rate}
        />
      </div>
      
    </div>
    <MovieModal movie={movie} setShowMovie={setShowMovie} showMovie={showMovie}/>
    </div>
    
  );
};

export default Moviecard;
