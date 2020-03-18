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
      sort_by: "revenue.desc",
      page: 1,
      total_page: ""
    };
    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App didMount");
    this.getMovies();
    // console.log("after fetch");
  }
  componentDidUpdate(prevProps, prevState) {
    const { sort_by, page } = this.state;
    // console.log("App didUpdate");
    // console.log("prev", prevProps, prevState);
    // console.log("this", this.props, this.state);
    if (prevState.sort_by !== sort_by || prevState.page !== page) {
      this.getMovies();
    }
  }

  getMovies = () => {
    const { sort_by, page } = this.state;
    const qwerySrting = "/discover/movie";

    fetch(
      `${API_URL}${qwerySrting}?api_key=${API_KEY_3}&sort_by=${sort_by}&page=${page}`
    )
      .then(response => {
        console.log("then", response);
        return response.json();
      })
      .then(data => {
        console.log("fetch data ", data);
        this.setState({
          movies: data.results,
          total_page: data.total_pages
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

  handelPrewPage = () => {
    const { page } = this.state;
    if (page === 1) {
      return;
    } else {
      this.setState({
        page: page + -1
      });
    }
  };
  handelNextPage = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1
    });
  };
  render() {
    const { movies, moviesWillWatch, sort_by, page, total_page } = this.state;
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
          <div className="col-12 mb-2 ml-3">
            <div className="row">
              <button
                type="button"
                onClick={this.handelPrewPage}
                className="btn btn-secondary"
              >
                Prew
              </button>
              <div className="ml-3 mr-3">
                <h4>
                  Movie Page: {page}/{total_page}
                </h4>
              </div>
              <button
                type="button"
                onClick={this.handelNextPage}
                className="btn btn-secondary"
              >
                Next
              </button>
            </div>
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
