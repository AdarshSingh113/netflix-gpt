import { useEffect } from "react";
import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
   
    const getMoviesData = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        getMoviesData();
    },[]);
}

export default useUpcomingMovies;