import React from "react";
import style from "./App.module.css";
// function MovieItem(props) {
//   console.log("Movie itemProps", props);
//   // const {
//   //   data: { title, vote_average, image, overview }
//   // } = props;
//   return (
//     <div>
//       {/* <h1>Props movie data</h1>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p> */}

//       {/* <h1>Static</h1>
//       <p>Title</p>
//       <p>8.0</p> */}

//       {/* <h1>Props</h1>
//       <p>{props.title}</p>
//       <p>{props.vote_average}</p>
//       <span className="props_data">title="Title new" vote_average={10.0}</span> */}
//     </div>
//   );
// }

function Image(props) {
  console.log("Image props", props);
  return <img width="100%" src={props.src} alt={props.alt} />;
}

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://personal.psu.edu/xqz5228/jpg.jpg",
  overview:
    "Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."
};

// MovieItem = new React.Component()
class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }

  handlerShowOverview = () => {
    console.log("show");
    this.setState({
      show: !this.state.show
    });
  };

  handelLike = () => {
    console.log("like");
    this.setState({
      like: !this.state.like
    });
  };
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log("state: ", this.state);
    console.log("this props", this);
    return (
      <div style={{ width: "300px" }}>
        <h1>Props movie data</h1>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.handlerShowOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handelLike}
            // className={this.state.like ? "btn__like" : ""}
            className={
              this.state.like ? style.btn__like : style.btn__like_dislike
            }
            // style={{ background: this.state.like ? "blue" : "white" }}
          >
            Like
          </button>
        </div>
        {/* <button
          type="button"
          onClick={() => {
            console.log("show");
            this.setState({
              show: false
            });
          }}
        >
          hide
        </button> */}
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
