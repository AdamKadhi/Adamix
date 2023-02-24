import Moviecard from "./Moviecard";
const MovieList = ({ movies, search}) => {
  return (
    <div className="rt">
      <h1 className="test">Movies:</h1>
      <div className="wrapper">
        {movies
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .map((el) => (
              <Moviecard
                movie={el}
                
              />
              
          ))}
      </div>
    </div>
  );
};

export default MovieList;
