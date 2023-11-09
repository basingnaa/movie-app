import useSWR from "swr"
import { searchMovie } from "../api/movieApi"
import "./SearchResultsList.css"
import SearchResult from "./SearchResult"


const SearchResultsList = ({ searchTerm, setSearchValue }) => {
    const {
        isLoading,
        error,
        data,
    } = useSWR(searchTerm ? searchTerm : null, searchMovie)

    let content
    if (isLoading) content = <p>Loading...</p>
    else if (error) content = <p>{error.message}</p>
    else {
        content =
            data?.results.map((result) => {
                return <SearchResult result={result} setSearchValue={setSearchValue}/>
            })

    }

    return (
        <div className="resultList">
            {content}
        </div>
    )
}

export default SearchResultsList