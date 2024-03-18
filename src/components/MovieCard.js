import React, { useState } from "react";
import { Img_CDN } from "../utils/constant";

const MovieCard = ({ posterPath, movieName, overview }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="w-36 md:w-48 pr-4 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: "transform 0.3s",
          transform: isHovered ? "scale(1.3)" : "scale(1)",
        }}
      >
        <img alt="Movie Card" src={Img_CDN + posterPath} />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black  text-white">
           <div className="w-full h-full flex justify-center items-center">
              <img
                alt="Movie Card"
                src={Img_CDN + posterPath}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            </div>
        )}
      </div>
    </>
  );
};

export default MovieCard;
