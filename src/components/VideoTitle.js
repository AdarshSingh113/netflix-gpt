const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black  ">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h1 className="text-lg w-1/4 pt-4">{overview}</h1>
      <div className="pt-6 flex items-center">
          <button className="bg-white text-black py-3 px-6 rounded-lg flex items-center hover:bg-opacity-80 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M8 5v14l11-7z" />
          </svg>
            Play
          </button>
        <button className="bg-gray-300 rounded-lg text-black mx-3 py-3 px-8">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
