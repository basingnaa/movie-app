import './MovieCard.css';
import { AiFillPlayCircle } from 'react-icons/ai'

const MovieCard = ({ movie }) => {
  return (
    <div className='movieCard'>
      <div className="movieImage">
          <AiFillPlayCircle size={50} />
        <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
      </div>
      <p>{movie?.original_title}</p>
    </div>
  )
}

export default MovieCard