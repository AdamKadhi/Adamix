import React from "react";

const AddMovie = (props) => {
  const { show, setShow, new_movie, setNew_Movie, addmovi } = props;

  return (
    <div>
      {show ? (
        <div className="add_movie">
          <div className="box_modal">
            <i onClick={() => setShow(!show)} class="fa-solid fa-x"></i>
            <h1>Add Movie</h1>
            <label>Name:</label>
            <input
              type="text"
              onChange={(e) =>
                setNew_Movie({ ...new_movie, name: e.target.value })
              }
            />
            <label>Genre:</label>
            <input
              type="text"
              onChange={(e) =>
                setNew_Movie({ ...new_movie, genre: e.target.value })
              }
            />
            <label>Description:</label>
            <input
              type="text"
              onChange={(e) =>
                setNew_Movie({ ...new_movie, description: e.target.value })
              }
            />
            <label>Image:</label>
            <input
              type="text"
              onChange={(e) =>
                setNew_Movie({ ...new_movie, image: e.target.value })
              }
            />
            <label>Rate:</label>
            <input
              type="text"
              onChange={(e) =>
                setNew_Movie({ ...new_movie, rate: e.target.value })
              }
            />
            <button onClick={() => {addmovi(new_movie);setShow(!show);setNew_Movie([])}}>ADD</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddMovie;
