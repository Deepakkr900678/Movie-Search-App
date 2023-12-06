import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Card.css";
import ReactStars from "react-rating-stars-component";

export default function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {
        isLoading ? (
          <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
              <Skeleton height={300} duration={2}></Skeleton>
            </SkeletonTheme>
          </div>
        ) : (
          <>
            <Link
              className="card"
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <img
                className="card-thumbnail"
                src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""
                  }`}
                alt={movie ? movie.original_title : ""}
              />

              <div className="card-summery">
                <div className="card-title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="card-runtime">
                  {movie ? movie.release_date : ""}

                </div>

                <ReactStars
                  count={5}
                  size={24}
                  value={movie.vote_average / 2 || 0}
                  edit={false}
                  isHalf={true}
                  activeColor="#ffd700"
                  color="#fff"
                  filledIcon={false}
                />
                <div className="card-description">
                  {movie ? movie.overview.slice(0, 118) + "..." : ""}
                </div>
              </div>
            </Link>
          </>
        )
      }
    </>
  );
}
