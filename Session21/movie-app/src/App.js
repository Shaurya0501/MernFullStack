import React, {useState,useEffect} from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL=`https://www.omdbapi.com/`;

function App()
{
  const [searchTerm,setSearchTerm]=useState("");
  const [movies,setMovies]=useState([]);

  const fetchMovies=async(query)=>{
    const { data }=await axios.get(API_URL,{
      params:{apikey:API_KEY,s:query},
    });
    if(data.Search){
    setMovies(data.Search);
  }
  }


  useEffect(()=>{
    fetchMovies(searchTerm);
  },[searchTerm]);

  return(
    <div className="app">
      <h1 className="title">MOVIE LIST</h1>
      <div className="button-group">
        {["Marvel","Funny","Animation","Web Series"].map((cat)=>(
          <button key={cat}>{cat} Movie</button>
        ))}
      </div>
      <SearchBar onSearch={setSearchTerm}/>
      <div className="movie-grid">
        {movies.map((movie)=>(
          <MovieCard key={movie.imdbID} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default App;