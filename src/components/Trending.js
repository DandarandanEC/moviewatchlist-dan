import React, { useEffect, useState, useContext } from 'react';
// import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Trending = ({ movie }) => {
    const [movies,setMovies] = useState([]);
    // const { watchlist } = useContext(GlobalContext);

    useEffect(() =>{
        fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`
          )
            .then((res) => res.json())
            .then((data) => {
              if (!data.errors) {
                setMovies(data.results);
              } else {
                setMovies([]);
              }
            });
    },[]);


    return (
        <div className="trending-page">
            <div className="container">
                <div className="trending-content">
                    <div className="movie-grid">
                        {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} type="trending"/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}
