import React from 'react';

const MovieModal = ({ movieName, overview, closeModal}) => {
    console.log(movieName + overview)
    const handleCloseModal = (event) => {
        if (event.target === event.currentTarget) { // Check if click occurred on the modal overlay
          closeModal(); // Close the modal
        }
      };
  return (
    <div className="modal bg-white w-40 h-80 absolute bg-transparent">
      <div className="modal-content">
        <span  onClick={handleCloseModal}>&times;</span>
        <h2>{movieName}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieModal;
