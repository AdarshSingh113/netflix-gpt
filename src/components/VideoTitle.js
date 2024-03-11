const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-4 sm:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
      <h1 className="text-sm sm:text-lg w-full sm:w-1/2 pt-2 sm:pt-4">
        {overview}
      </h1>
      <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center">
        <button className="bg-white text-black py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center hover:bg-opacity-80 mb-2 sm:mb-0 mr-0 sm:mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="ml-1">Play</span>
        </button>
        <button className="bg-gray-300 rounded-lg text-black py-2 sm:py-3 px-4 sm:px-8">
          More Info
        </button>
      </div>
    </div>);
};

export default VideoTitle;
