import React from "react";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { sort_by, updateSortBy } = this.props;
    const handelClick = value => () => updateSortBy(value);
    // const handelClick = value => {
    //   return event => {
    //     updateSortBy(value);
    //   };
    // };
    const getClassLink = value => {
      return `nav-link ${sort_by === value ? "active" : ""}`;
    };
    console.log("movieTabs");
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={getClassLink("popularity.desc")}
            onClick={handelClick("popularity.desc")}
          >
            Popularity
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("revenue.desc")}
            // className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}
            onClick={handelClick("revenue.desc")}
          >
            Revenue
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink("vote_average.desc")}
            // className={`nav-link ${
            //   sort_by === "vote_average.desc" ? "active" : ""
            // }`}
            onClick={handelClick("vote_average.desc")}
          >
            Vote avetage
          </div>
        </li>
      </ul>
    );
  }
}

// const MovieTabs = ({ sort_by, updateSortBy }) => {
//   const handelClick = value => () => updateSortBy(value);
//   // const handelClick = value => {
//   //   return event => {
//   //     updateSortBy(value);
//   //   };
//   // };
//   const getClassLink = value => {
//     return `nav-link ${sort_by === value ? "active" : ""}`;
//   };
//   console.log("movieTabs");
//   return (
//     <ul className="tabs nav nav-pills">
//       <li className="nav-item">
//         <div
//           className={getClassLink("popularity.desc")}
//           onClick={handelClick("popularity.desc")}
//         >
//           Popularity
//         </div>
//       </li>
//       <li className="nav-item">
//         <div
//           className={getClassLink("revenue.desc")}
//           // className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}
//           onClick={handelClick("revenue.desc")}
//         >
//           Revenue
//         </div>
//       </li>
//       <li className="nav-item">
//         <div
//           className={getClassLink("vote_average.desc")}
//           // className={`nav-link ${
//           //   sort_by === "vote_average.desc" ? "active" : ""
//           // }`}
//           onClick={handelClick("vote_average.desc")}
//         >
//           Vote avetage
//         </div>
//       </li>
//     </ul>
//   );
// };

export default MovieTabs;
