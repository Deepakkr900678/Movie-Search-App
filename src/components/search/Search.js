import axios from "axios";
import React, { useState } from "react";
import Card from "../card/Card";
import "./Search.css";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function fetchData(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=db75be3f6da59e6c54d0b9f568d19d16&language=en-US&query=${searchData}&page=1&include_adult=false`
      )
      .then((res) => {
        setSearchResult(res.data.results);
      })
      .then(() => { });
  }

  return (
    <div className="search">
      <form onSubmit={fetchData}>
        <input
          placeholder="enter movie name..."
          autoFocus={true}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="cards-container">
        {
          searchResult.map(movie => (
            <Card movie={movie} />
          ))
        }
      </div>
    </div>
  );
};

export default Search;
