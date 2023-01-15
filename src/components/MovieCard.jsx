import { Link } from "react-router-dom";

const MovieCard = ({ id, title, year, poster }) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="flex flex-col bg-slate-200 border border-gray-900 text-center shadow-xl rounded-md space-y-5"
    >
      <div className="h-4/5 border-b border-stone-900 overflow-hidden">
        <img className="h-full w-full" src={poster} alt={title} />
      </div>
      <div className="h-1/6 flex justify-center items-center">
          <h3 className="text-2xl font-bold px-2">
            {title} <span className="font-semibold">({year})</span>
          </h3>
      </div>
    </Link>
  );
};

export default MovieCard;
