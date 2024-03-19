import { useEffect } from "react";
import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = () => {
  
    const dispatch = useDispatch();

  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1096197/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    console.log("JSON",json.results);
    const filterData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesData();
  }, [dispatch]);
};

export default useMovieTrailer;
