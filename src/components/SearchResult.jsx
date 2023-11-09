import "./SearchResult.css"
import { useNavigate } from "react-router-dom"

const SearchResult = ({ result, setSearchValue }) => {
    const navigate = useNavigate();

    const handleClick = async (e, movie_id) => {
        e.preventDefault();

        navigate("/movie", {state: movie_id});
        setSearchValue("");
    }
    
    return (
        <div className='result' onClick={(e) => handleClick(e, result?.id)}>
            <div className="resultImage">
                <img src={`https://image.tmdb.org/t/p/w500${result?.poster_path}`} alt="" />
            </div>
            <div className="resultText">
                <h4>{result?.title}</h4>
            </div>
        </div>
    )
}

export default SearchResult