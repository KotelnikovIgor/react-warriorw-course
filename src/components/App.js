import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList from "../components/MovieList/MovieList";
import MovieListWillWatch from "../components/MovieListWillWatch/MovieListWillWatch";

// import style from "./App.module.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }
  handlerAddWillWatch = item => {
    const { moviesWillWatch } = this.state;
    this.setState({
      moviesWillWatch: [...moviesWillWatch, item]
    });
  };

  handlerRemoveWillWatch = item => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(el => {
      return el.id !== item.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  render() {
    const { movies, moviesWillWatch } = this.state;
    console.log(this);
    console.log(movies);
    return (
      <div className="container">
        <div className="row ">
          <div className="col-9">
            <MovieList
              movies={movies}
              handlerAddWillWatch={this.handlerAddWillWatch}
              handlerRemoveWillWatch={this.handlerRemoveWillWatch}
            />
          </div>
          <div className="col-3">
            <MovieListWillWatch moviesWillWatch={moviesWillWatch} />
          </div>
        </div>
      </div>
    );
  }
}
// function App() {
//   return <div>{moviesData[0].title}</div>;
// }

export default App;
