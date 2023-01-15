import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {moviesList?.Search?.map(({ imdbID, Title, Year, Poster }) => (
        <MovieCard
          key={imdbID}
          id={imdbID}
          title={Title}
          year={Year}
          poster={Poster}
        />
      ))}
    </div>
  );
};

export default MoviesList;
