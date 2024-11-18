import axios from "axios";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
    headers: {
        Authorization: `Bearer ${VITE_API_KEY}`
    },
})

export { axiosInstance }