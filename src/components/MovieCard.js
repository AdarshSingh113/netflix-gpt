import React, { useState } from "react";
import { Img_CDN } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movieName, overview }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const goToMoviePage = () =>{
    navigate("/moviePage")
  }

  return (
    <div
      className="w-36 md:w-48 pr-4 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "transform 0.3s",
        transform: isHovered ? "scale(1.3)" : "scale(1)",
      }}
    >
      <div className="relative">
        <img alt="Movie Card" src={Img_CDN + posterPath} style={{ zIndex: 0 }} />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button onClick={goToMoviePage} className="bg-black bg-opacity-45 text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
