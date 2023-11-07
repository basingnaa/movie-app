import React from 'react'

export const MovieDetails = ({ movieDetails }) => {
    return (
        <div className="details">
            <div className="detailsImage">
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt="" />
            </div>
            <div className="detailsText">
                <div className="movieTitle">
                    <h1>{movieDetails?.title} <span></span></h1>
                    <div className="movieFacts">
                        <span className="rating">
                            {movieDetails?.adult && "R - Rated"}
                            {!movieDetails?.adult && "PG - 13"}
                        </span>
                        <span className="releaseDate">{movieDetails?.release_date}</span>
                        <span className="genres">
                            {movieDetails?.genres?.map((genre) => {
                                return genre.name + " "
                            })}
                        </span>
                        <span className="runtime">{`${Math.floor(movieDetails?.runtime / 60)}h ${movieDetails?.runtime % 60}m`}</span>
                    </div>
                </div>
                <div className="movieInfo">
                    <h3>Overview</h3>
                    <div className="overview">
                        <p>
                            {movieDetails?.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails