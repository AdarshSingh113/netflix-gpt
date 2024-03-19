const PlayMovie = ()=>{
    return(
        <div>
            <iframe className="w-screen aspect-video"
              src="https://www.youtube.com/embed/_inKs4eeHiI?si=zKN6_Sq9hvO3v6lN?&autoplay=1" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
            allowfullscreen></iframe>
        </div>
    )
}

export default PlayMovie;