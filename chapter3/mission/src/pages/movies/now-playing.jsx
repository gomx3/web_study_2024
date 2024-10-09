import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const NowPlaying = () => {
    return (
        <Container>
            <h1>하하</h1>
        </Container>
    );
};

export default NowPlaying;

const Container = styled.div`
    position: fixed;
    top: 77px;
    left: 150px;
    width: 100%;
    height: 100vh;
    background-color: black;
`

// const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1`
// const { VITE_API_KEY } = import.meta.env;

// const NowPlaying = () => {
//     const [movies, setMovies] = useState([])

//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//                 const movies = await axios.get(BASE_URL, {
//                     headers: {
//                         Authorization: `Bearer ${VITE_API_KEY}`
//                     }
//                 });
//                 setMovies(movies);
//             } catch (error) {
//                 console.error("Error fetching movies:", error);
//             }
//         }; 
//         getMovies();   
//     }, []);

//     return (
//         <Container>
//             {movies.data.results.map((movie) => (
//                 <Card key={movie.id} movie={movie}/>
//             ))}
//         </Container>
//     );
// };

// export default NowPlaying;

// const Container = styled.div`
//     position: fixed;
//     top: 77px;
//     left: 150px;
//     width: 100%;
//     height: 100vh;
//     background-color: black;
// `