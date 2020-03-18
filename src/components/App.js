import React, { Component } from "react";
// import { moviesData } from "../moviesData";
import MovieTabs from "../components/MovieTabs/MovieTabs";
import MovieList from "../components/MovieList/MovieList";
import MovieListWillWatch from "../components/MovieListWillWatch/MovieListWillWatch";
import { API_URL, API_KEY_3 } from "../utils/api";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "revenue.desc"
    };
    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App didMount");
    this.getMovies();
    // console.log("after fetch");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("App didUpdate");
    console.log("prev", prevProps, prevState);
    console.log("this", this.props, this.state);
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
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
  };

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

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    const { movies, moviesWillWatch, sort_by } = this.state;
    console.log(this);
    console.log(movies);
    console.log("App render");
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs sort_by={sort_by} updateSortBy={this.updateSortBy} />
              </div>
            </div>
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
