import { AiFillPlayCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = async (e, movie_id) => {
    e.preventDefault();

    navigate("/movie", {state: movie_id});
  }

  return (
    <div className='movieCard' onClick={(e) => handleClick(e, movie?.id)}>
      <div className="movieImage">
          <AiFillPlayCircle size={50} />
        <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
      </div>
      <p>{movie?.original_title}</p>
    </div>
  )
}

export default MovieCard