import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MovieCard = (props, movies) => {
    const movie = props.movie;
    const description = movies.description
    return (
      <div className="container">
        <div className="img">
          <Router>
             <Link to= '/description' component={movies.description} >
                 <img src={movie.posterURL} alt=""/>
          </Link>
          <Link to='/'><button>Back</button></Link>
          </Router>
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
        <div className="rating">
          <h2>{movie.rating}</h2>
        </div>
      </div>
    );
  };
  
  export default MovieCard;