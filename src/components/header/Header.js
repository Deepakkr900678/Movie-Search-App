import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to="/" className='header_link'><h2 className='header_title'>Our Genres</h2></Link>
        <Link to="/movies/upcoming" className='header_link'><h2 className='header_title'>Upcoming Movies</h2></Link>
        <Link to="/movies/popular" className='header_link'><h2 className='header_title'>Latest Movies</h2></Link>
        <Link to="/movies/top_rated" className='header_link'><h2 className='header_title'>Top-rated Movies</h2></Link>
        <Link to="/movies/popular" className='header_link'><h2 className='header_title'>Popular Movies</h2></Link>
        <Link to="/search" className='header_link'><h2 className='header_title'>Search</h2></Link>
      </div>
    </div>
  )
}
