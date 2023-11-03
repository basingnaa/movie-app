import axios from "axios";

const movieApi = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const movieUrlEndpoint = '/movie'

const nowPlayingUrlEndpoint = '/movie/now_playing'
const popularUrlEndpoint = '/movie/popular'
const topRatedEndpoint = '/movie/top_rated'
const upcomingEndpoint = '/movie/upcoming'

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