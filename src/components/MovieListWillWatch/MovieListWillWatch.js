import React from "react";

const MovieListWillWatch = ({ moviesWillWatch }) => {
  return (
    <div>
      <h4>Will Watch: {moviesWillWatch.length}</h4>
      <ul className="list-group">
        <li className="list-group-item">
          {moviesWillWatch.map(item => (
            <div key={item.id} className="d-flex justify-content-between">
              <div>
                <p>{item.title}</p>
              </div>
              <div>
                <p>{item.vote_average}</p>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MovieListWillWatch;
