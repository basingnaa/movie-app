import MovieCard from '../components/MovieCard'
import './HomePage.css'
import useSWR from 'swr'
import { getNowPlaying, getPopular, getTopRated, getUpcoming, movieUrlEndpoint as cacheKey } from '../api/movieApi'
import SkeletonMovieCard from '../components/skeletons/SkeletonMovieCard'

function HomePage() {

  const {
    isNPLoading,
    nPerror,
    data: nowPlaying,
  } = useSWR(cacheKey, getNowPlaying)

  const {
    isPopLoading,
    popError,
    data: popular,
  } = useSWR(cacheKey, getPopular)

  const {
    isTRLoading,
    tRError,
    data: topRated,
  } = useSWR(cacheKey, getTopRated)

  const {
    isUPLoading,
    uPError,
    data: upcoming,
  } = useSWR(cacheKey, getUpcoming)

  

  let nowPlayingMovieList
  if (isNPLoading) {
    nowPlayingMovieList = (
      [...Array(10).keys()].map(i => {
        return <SkeletonMovieCard key={i}/>
      }) 
    )
  } else if(nPerror) {
    nowPlayingMovieList = <p>{nPerror.message}</p>
  } else {
    nowPlayingMovieList = nowPlaying?.results.map((movie) => {
      return(
        <MovieCard key={movie?.id} movie={movie}/>
      )
    }) 
  }

  let popularMovieList
  if(isPopLoading) {
    popularMovieList = (
      [...Array(10).keys()].map(i => {
        return <SkeletonMovieCard key={i}/>
      }) 
    )
  }else if(popError) {
    popularMovieList = <p>{popError.message}</p>
  } else {
    popularMovieList = popular?.results.map((movie) => {
      return(
        <MovieCard key={movie?.id} movie={movie} />
      )
    })
  }

  let topRatedMovieList
  if(isTRLoading) {
    topRatedMovieList = (
      [...Array(10).keys()].map(i => {
        return <SkeletonMovieCard key={i}/>
      }) 
    )
  }else if(popError) {
    topRatedMovieList = <p>{tRError.message}</p>
  } else {
    topRatedMovieList = topRated?.results.map((movie) => {
      return(
        <MovieCard key={movie?.id} movie={movie} />
      )
    })
  }

  let upcomingMovieList
  if(isUPLoading) {
    upcomingMovieList = (
      [...Array(10).keys()].map(i => {
        return <SkeletonMovieCard key={i}/>
      }) 
    )
  }else if(uPError) {
    upcomingMovieList = <p>{uPError.message}</p>
  } else {
    upcomingMovieList = upcoming?.results.map((movie) => {
      return(
        <MovieCard key={movie?.id} movie={movie} />
      )
    })
  }

  return (
    <div className='homePage'>
      <h1>Home Page</h1>
      <div className="movieSection">
        <h2>Now Playing</h2>
        <div className="movieList">
          {nowPlayingMovieList}
        </div>
      </div>
      <div className="movieSection">
        <h2>Popular</h2>
        <div className="movieList">
          {popularMovieList}
        </div>
      </div>
      <div className="movieSection">
        <h2>Upcoming</h2>
        <div className="movieList">
          {upcomingMovieList}
        </div>
      </div>
      <div className="movieSection">
        <h2>Top Rated</h2>
        <div className="movieList">
          {topRatedMovieList}
        </div>
      </div>
    </div>
  )
}

export default HomePage