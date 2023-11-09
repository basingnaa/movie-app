import axios from "axios";

const movieApi = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const nowPlayingUrlEndpoint = 'movie/now_playing'
export const popularUrlEndpoint = '/movie/popular'
export const topRatedEndpoint = '/movie/top_rated'
export const upcomingEndpoint = '/movie/upcoming'

const config = {
    headers: {
        "Accept": "application/json",
    },
    params: {
        "api_key": "8a495c286fb797f007940c6275782b59"
    }
}

export const getNowPlaying = async() => {
    const response = await movieApi.get(nowPlayingUrlEndpoint, config)
    return response.data
}

export const getPopular = async() => {
    const response = await movieApi.get(popularUrlEndpoint, config)
    return response.data
}

export const getTopRated = async() => {
    const response = await movieApi.get(topRatedEndpoint, config)
    return response.data
}

export const getUpcoming = async () => {
    const response = await movieApi.get(upcomingEndpoint,config)
    return response.data
}

export const getMovieDetails = async (movie_id) => {
    const response = await movieApi.get(`movie/${movie_id}`,config)
    return response.data
}

export const searchMovie = async (searchTerm) => {
    const searchConfig = {
        headers: {
            "Accept": "application/json",
        },
        params: {
            "api_key": "8a495c286fb797f007940c6275782b59",
            "query": searchTerm
        }
    }

    const response = await movieApi.get('search/movie', searchConfig)
    console.log(response.data)
    return response.data
}