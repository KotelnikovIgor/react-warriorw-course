import React from "react";

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
  return <img src={props.src} alt={props.alt} />;
}

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://personal.psu.edu/xqz5228/jpg.jpg",
  overview:
    "Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."
};

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log("this props", this);
    return (
      <div>
        <h1>Props movie data</h1>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
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
