import React, { useState } from 'react'
import { Img_CDN } from '../utils/constant'
import MovieModal from './MovieModal';

const MovieCard = ({posterPath,movieName,overview}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return(
  <>
  <div className="w-36 md:w-48 pr-4">
    <button onClick={toggleModal}>
      <img alt='Movie Card' src={Img_CDN + posterPath} />
      </button>
    </div>
  {isModalOpen && (
    <MovieModal
      movieName={movieName}
      overview={overview}
      closeModal={toggleModal}
    />
  )}
</>
);
}

export default MovieCard
