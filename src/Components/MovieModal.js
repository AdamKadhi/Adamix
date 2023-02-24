import React from "react";
import ReactStars from "react-stars";

const MovieModal = ({ movie, setShowMovie, showMovie }) => {
  return (
    <div>
      {showMovie ? (
        <div className="movie_modal">
          <div className="box_movie_modal">
            <i
              onClick={() => setShowMovie(!showMovie)}
              className="fa-solid fa-x"
            ></i>

            <img src={movie.image} alt="" />
            <div className="content">
              <h3>{movie.genre}</h3>
              <h1>{movie.name}</h1>
              <p>{movie.description}</p>
              <div className="down">
                <ReactStars
                  className="stars"
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                  edit={false}
                  value={movie.rate}
                />
                <button> <i class="fa-solid fa-play"></i> Watch Now</button>
              </div>
            </div>
          </div>
          </div>
      ) : null}
    </div>
  );
};

export default MovieModal;
