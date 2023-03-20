// https://api.themoviedb.org/3/movie/550?api_key=6034377c274d1da543de69b6e8c68f8f
// https://api.themoviedb.org/3/search/movie?api_key=6034377c274d1da543de69b6e8c68f8f&query=""
// https://api.themoviedb.org/3/movie/550?api_key=6034377c274d1da543de69b6e8c68f8f
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import useDebouce from "../hooks/useDebounce";
import LoadingSkeleton from "./loading/LoadingSkeleton";
const MovieSearchApp = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const debounceQuery = useDebouce(query, 500);
  console.log("debounceQUery", debounceQuery);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6034377c274d1da543de69b6e8c68f8f&query='${debounceQuery}'`
      );
      if (response.data.results) {
        setMovie(response.data.results);
        setLoading(false);
      }
    }
    fetchData();
  }, [debounceQuery]);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-500 shadow-[0px_0px_0px_3px_rgba(_125,_106,_255,_0.2)]"
          placeholder="Search Movie "
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {!loading &&
          movie.length > 0 &&
          movie.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};
// https://image.tmdb.org/t/p/original

const MovieItemLoading = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 flex flex-col">
      <div className="h-[297px]">
        <LoadingSkeleton width="100%" height="100%"></LoadingSkeleton>
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-base text-black font-semibold mb-4">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </h3>
        <p className="text-[#999] text-sm mb-6 !leading-relaxed">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-1"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-1"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-1"></div>
        </p>
        <div className="flex items-center gap-x-3 mt-auto">
          <AiFillStar></AiFillStar>
          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton height="10px" width="50px"></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};

const MovieItem = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 flex flex-col">
      <div className="h-[297px]">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt=""
          className="w-full object-cover rounded-lg"
        />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-base text-black font-semibold mb-4">
          {data.title}
        </h3>
        <p className="text-[#999] text-sm mb-6 !leading-relaxed">
          {data.overview}
        </p>
        <div className="flex items-center gap-x-3 mt-auto">
          <AiFillStar></AiFillStar>
          <span className="text-sm font-semibold text-[#333]">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
