import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.scrollLeft - 500;
      smoothScroll(container, scrollAmount);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.scrollLeft + 500;
      smoothScroll(container, scrollAmount);
    }
  };

  const smoothScroll = (element, scrollAmount) => {
    const start = element.scrollLeft;
    const change = scrollAmount - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, 500);
      element.scrollLeft = val;
      if (currentTime < 500) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  // Easing function
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="relative">
        <div
          className="flex overflow-hidden transition-transform duration-300 ease-in-out"
          ref={containerRef}
        >
          <div className="flex ">
            {movies &&
              movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movieName={movie.original_title}
                  overview={movie.overview}
                  posterPath={movie.poster_path}
                />
              ))}
          </div>
        </div>
        <div>
          <button
            className="bg-gray-300  absolute mt-20  top-0 left-0 bottom-0 px-2 py-1 rounded-full flex items-center h-16 w-16 
      justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 "
            onClick={scrollLeft}
          >
            {" "}
            <svg className="text-black w-16 h-16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              ></path>
            </svg>
          </button>
          <button
            className="bg-gray-300 absolute mt-20 top-0 right-0 bottom-0  px-2 py-1 rounded-full flex items-center h-16 w-16
        justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 "
            onClick={scrollRight}
          >
            <svg className="text-black w-16 h-16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10.59 16.59L12 18l6-6-6-6-1.41 1.41L14.17 12z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
