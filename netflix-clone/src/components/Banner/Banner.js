import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import requests from '../../utils/request';
import "./Banner.css"
const Banner = () => {
    const [movie,setMovie]=useState({})
   //kjkjlkjk
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("Error fetching Netflix Originals:", error);
      }
    })(); // <-- Correctly closed the IIFE
  }, []);
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str;
}
  return <div>{movie?.title || "Loading..."}</div>;
};
  return (
    <div className="banner" 

style={{ 
backgroundSize: "cover", 
backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}'}`, 
backgroundPosition: "center", 
backgroundRepeat: "no-repeat" 
}} >
<div className="banner contents"> 
<h1 className="banner _title"> 
{movie?.title || movie?.name || movie?.original_name }
</h1> 
<div className="banner_buttons"> 
<button className="banner_button play">Play</button> 
<button className="banner_button">My List</button> 
</div> 
<h1 className="banner_description">{truncate (movie?.overview, 150)}</h1> 
</div> 
<div className="banner_fadeBottom" />
    </div>
  )


export default Banner
