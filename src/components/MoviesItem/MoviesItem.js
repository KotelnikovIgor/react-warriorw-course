import React, { Component } from "react";

class MoviesItem extends Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  handlerWillWatch = () => {
    const changeWillWatch = !this.state.willWatch;
    this.setState({
      willWatch: changeWillWatch
    });
  };
  render() {
    const {
      handlerAddWillWatch,
      handlerRemoveWillWatch,
      handlerDeleteMovies,
      item
    } = this.props;
    console.log(this.state.willWatch);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
            <button
              type="button"
              className={
                this.state.willWatch ? "btn btn-success" : "btn btn-secondary"
              }
              onClick={() =>
                this.state.willWatch
                  ? this.handlerWillWatch(handlerRemoveWillWatch(item))
                  : this.handlerWillWatch(handlerAddWillWatch(item))
              }
            >
              {this.state.willWatch ? "Will`not Watch" : "Will Watch"}
            </button>

            {/* two-button example
            {this.state.willWatch === true ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.setState({
                  willWatch: false
                });
                handlerRemoveWillWatch(item);
              }}
              
            >
              Will Watch
            </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.setState({
                    willWatch: true
                  });
                  handlerAddWillWatch(item);
                }}
              >
                Will Watch
              </button>
            )} */}
          </div>
          <div>
            <button
              type="button"
              onClick={handlerDeleteMovies.bind(null, item)}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesItem;
