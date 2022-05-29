import axios from 'axios';
import queryString from 'query-string';
import apiConfiguration from './apiConfiguration';

const axiosClient = axios.create({
    baseURL: apiConfiguration.url,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfiguration.apiKey})
    //Example: https://api.themoviedb.org/3/movie/550?api_key=075e2fec2cd8be49139434941af9c517
})

axiosClient.interceptors.request.use(async (config) => config)

axiosClient.interceptors.response.use(response => {
    if(response && response.data) {
        return response.data;
    }
    return response;
}, e => {throw e})

export default axiosClient
