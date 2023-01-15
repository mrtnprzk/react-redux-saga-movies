import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/features/movieSlice";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Title, Plot, Year, Poster } = movie;

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id]);

  return (
    <section className="flex border border-gray-400 rounded-lg overflow-hidden">
      <img src={Poster} alt={Title} />
      <div className="bg-gray-100 flex flex-col justify-between py-3 px-5">
        <div className=" flex flex-col max-w-lg space-y-2">
          <h3 className="text-3xl font-bold">{Title} <span>({Year})</span></h3>
          
      

          <p className="text-xl">{Plot}</p>
          
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-cyan-200 p-2 rounded-md border border-cyan-900 hover:bg-cyan-400 duration-300"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default Movie;
