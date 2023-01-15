import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/features/movieSlice";

const Search = () => {
  const [name, setName] = useState("spider");
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(name));
  }, [dispatch, name]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl text-sky-600 font-extrabold">Movie Search App</h2>
      <form onSubmit={(e) => e.preventDefault()} className='bg-slate-400 border border-slate-600 space-y-5 px-5 py-3 m-5 rounded-lg shadow-xl'>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-100 border border-zinc-600 px-3 py-1 rounded"
        />
        {error && <p className="text-red-500 font-semibold text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Search;
