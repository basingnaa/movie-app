import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getMovieDetails } from '../api/movieApi';
import useSWR from 'swr';
import './MovieViewPage.css'
import MovieDetails from '../components/MovieDetails';

function MovieViewPage() {
  const location = useLocation();

  const {
    isLoading,
    error,
    data: movieDetails,
  } = useSWR(location?.state, getMovieDetails)

  let details
  if (isLoading) details = <p>Loading...</p>
  else if (error) details = <p>{error.message}</p>
  else {
    details = <MovieDetails movieDetails={movieDetails} />
  }

  return (
    <div className='movieView'>
      {details}
      <div className="details">
        <div className="detailsImage">
          <img src="" alt="" />
        </div>
        <div className="detailsText">
          <div className="movieTitle">
            <h1>Five Nights at Freddies <span>(2023)</span></h1>
            <div className="movieFacts">
              <span className="rating">PG-13</span>
              <span className="releaseDate">27/10/2023 (GH)</span>
              <span className="genres">Horror, Mystery</span>
              <span className="runtime">1h 50m</span>
            </div>
          </div>
          <div className="movieInfo">
            <h3>Overview</h3>
            <div className="overview">
              <p>
                Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.
              </p>
            </div>
            <ol className="people">
              <li className="profile">
                <p><a href="/#">Emma Tammi</a></p>
                <p>Director, Screenplay</p>
              </li>
              <li className="profile">
                <p><a href="/#">Seth Cuddeback</a></p>
                <p>Screenplay</p>
              </li>
              <li className="profile">
                <p><a href="/#">Scott Cawthon</a></p>
                <p>Screenplay</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieViewPage