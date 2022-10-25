import classes from './MovieList.module.css';
import Movie from './Movie';
import { useEffect, useState } from 'react';

const MovieList = (props) => {
  const [loadedMovies, setLoadedMovies] = useState([]);

  const getLoadedMovies = async () => {
    try {
      const response = await fetch(
        'https://react-http-ad0b1-default-rtdb.europe-west1.firebasedatabase.app/movies.json'
      );

      if (!response.ok) {
        throw new Error('Could Not Find Movies');
      }

      const data = await response.json();
      const loadedDataArray = [];
      for (const key in data) {
        loadedDataArray.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          imdbGrade: data[key].imdbGrade,
          img: data[key].img,
        });
      }

      setLoadedMovies(loadedDataArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLoadedMovies();
  }, []);

  const removeMovie = async (movieId) => {
    try {
      const response = await fetch(
        `https://react-http-ad0b1-default-rtdb.europe-west1.firebasedatabase.app/movies/${movieId}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Could Not Delete');
      }

      setLoadedMovies((prevMoviesList) =>
        prevMoviesList.filter((movie) => movie.id !== movieId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  let filteredMovies = loadedMovies.filter((movie) =>
    movie.name.toLowerCase().includes(props.searchWord.toLowerCase())
  );

  const movies = filteredMovies.map((movie) => {
    return (
      <li key={movie.id}>
        <Movie
          id={movie.id}
          name={movie.name}
          description={movie.description}
          imdbGrade={movie.imdbGrade}
          img={movie.img}
          removeMovie={removeMovie.bind(this, movie.id)}
        />
      </li>
    );
  });

  console.log('this runs');

  return (
    <section className={classes.movieList}>
      <ul>{movies}</ul>
    </section>
  );
};

export default MovieList;
