import React, { Component } from "react";
// import { moviesData } from "../moviesData";
import MovieList from "../components/MovieList/MovieList";
import MovieListWillWatch from "../components/MovieListWillWatch/MovieListWillWatch";
import { API_URL, API_KEY_3 } from "../utils/api";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("didMount");
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
      .then(response => {
        console.log("then", response);
        return response.json();
      })
      .then(data => {
        console.log("data ", data);
        this.setState({
          movies: data.results
        });
      });
    // console.log("after fetch");
  }

  handlerAddWillWatch = movie => {
    // const updateWillWatch = this.state.moviesWillWatch;
    const { moviesWillWatch } = this.state;
    this.setState({
      moviesWillWatch: [...moviesWillWatch, movie]
    });
  };

  handlerRemoveWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(el => {
      return el.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  handlerDeleteMovies = item => {
    const updateMovies = this.state.movies.filter(el => {
      return el.id !== item.id;
    });
    this.setState({
      movies: updateMovies
    });
  };

  render() {
    const { movies, moviesWillWatch } = this.state;
    console.log(this);
    console.log(movies);
    console.log("render");
    return (
      <div className="container">
        <div className="row ">
          <div className="col-9">
            <MovieList
              movies={movies}
              handlerAddWillWatch={this.handlerAddWillWatch}
              handlerRemoveWillWatch={this.handlerRemoveWillWatch}
              handlerDeleteMovies={this.handlerDeleteMovies}
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
