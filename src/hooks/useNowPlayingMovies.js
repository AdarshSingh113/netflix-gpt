import { useEffect } from "react";
import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
   
    const getMoviesData = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        getMoviesData();
    },[]);
}

export default useNowPlayingMovies;