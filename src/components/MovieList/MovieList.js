import React from "react";
import MoviesItem from "../MoviesItem/MoviesItem";

const MovieList = ({ movies, handlerAddWillWatch, handlerRemoveWillWatch }) => {
  return (
    <div className="row">
      {movies.map(item => (
        <div key={item.id} className="col-4 mb-4">
          <MoviesItem
            item={item}
            handlerAddWillWatch={handlerAddWillWatch}
            handlerRemoveWillWatch={handlerRemoveWillWatch}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
