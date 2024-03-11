import React from 'react'
import { Img_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt='Movie Card' src={Img_CDN + posterPath} />
    </div>
  )
}

export default MovieCard
