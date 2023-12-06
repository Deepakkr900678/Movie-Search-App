import React, { useEffect, useState } from 'react';
import "./MovieList.css";
import { useParams } from 'react-router-dom';
import Card from "../card/Card";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    setCurrentPage(1); 
    getData();
  }, [type]);

  useEffect(() => {
    getData();
  }, [currentPage, type]);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=db75be3f6da59e6c54d0b9f568d19d16&language=en-US&page=${currentPage}`)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
      .catch(error => console.error("Error fetching data:", error));
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='movie_list'>
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="cards-container">
        {
          movieList.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))
        }
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={movieList.length === 0} 
        >
          Next
        </button>
      </div>
    </div>
  );
}

