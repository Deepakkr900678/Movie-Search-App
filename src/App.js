import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Landing from './components/pages/landing/Landing';
import MovieList from './components/movieList/MovieList';
import MovieDetails from './components/pages/movieDetails/MovieDetails';
import Search from './components/search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path='movie/:id' element={<MovieDetails />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
