import React, { useEffect, useState } from 'react' 
import "./Row.css"; 
import axios from "../../../utils/axios"; 
import movieTrailer from 'movie-trailer'; 
import YouTube from 'react-youtube'; 
 
const Row = ({ title, fetchUrl, isLargeRow }) => {
    
    
    <div className={`row ${isLargeRow ? 'row-large' : ''}`}>
    <h2 className="row-title">{title}</h2> {/* Add a class to the title */}
    {/* Your movie items */}
  </div>


 const [movies, setMovie] = useState([]); 
const [trailerUrl, setTrailerUrl] = useState(""); 
const base_url = "https://image.tmdb.org/t/p/original"; 
useEffect(() => { 
(async () => { 
try { 
console.log(fetchUrl) 
const request =await axios.get(`${fetchUrl}`); /**in place of http://localhost:4000/api/ */
console.log(request) 
setMovie (request.data.results); 
} catch (error) { 
console.log("error", error); 
} 
})()

}, [fetchUrl]); 


const handleClick = (movie) => {
    if (!movie) return;
    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then((url) => {
                if (!url) return;
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log("Trailer not found:", error));
    }
};



// const handleClick = (movie) => {
// if (trailerUrl) { 
// setTrailerUrl('') 
// } else { 
// movieTrailer (movie?.title|| movie?.name || movie?.original_name) 
// .then((url) => { 
// console.log(url) 
// const urlParams = new URLSearchParams(new URL(url).search)
// console.log(urlParams) 
// console.log(urlParams.get('v')) 
// setTrailerUrl(urlParams.get('v')); 
// }) 
// }
// }
const opts = { 
height: '390', 
width: "100%", 
playerVars: {
autoplay: 1, 
}, 

} 
return (

<div className="row"> 
<h1>{title}</h1> 
<div className="row_posters"> 
{movies?.map((movie, index) => ( 
    movie.poster_path || movie.backdrop_path ? (
<img
key={movie.id}
onClick={() => handleClick(movie)}
 src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
/>
    ) : null
/* in place of {index} we put {movie.id}
className={`row_poster ${isLargeRow && "row_ posterlarge"}*/
))}
</div> 
<div style={{padding: '40px' }}> 
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} 
/>} 
</div> 
</div> 
)
}

export default Row