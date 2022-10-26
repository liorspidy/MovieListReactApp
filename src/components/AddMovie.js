import { useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddMovie.module.css';

const AddMovie = (props) => {
  const nameRef = useRef();
  const descRef = useRef();
  const imdbGradeRef = useRef();
  const imgRef = useRef();

  const addNewMovie = async (movie) => {
    try {
      const response = await fetch(
        'https://react-http-ad0b1-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
        {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Could Not Add Movie');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newMovie = {
      id: Math.random().toString(),
      name: nameRef.current.value,
      description: descRef.current.value,
      imdbGrade: imdbGradeRef.current.value,
      img: imgRef.current.value,
    };
    addNewMovie(newMovie);
    props.onAddMovieToList();
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Card>
        <div className={classes.input}>
          <label htmlFor="movieName">Movie Name</label>
          <input id="movieName" type="text" ref={nameRef}></input>
        </div>
        <div className={classes.input}>
          <label htmlFor="movieDesc">Description</label>
          <input id="movieDesc" type="text" ref={descRef}></input>
        </div>
        <div className={classes.input}>
          <label htmlFor="movieGrade">IMDB Grade</label>
          <input id="movieGrade" type="text" ref={imdbGradeRef}></input>
        </div>
        <div className={classes.input}>
          <label htmlFor="movieImg">Poster URL</label>
          <input id="movieImg" type="text" ref={imgRef}></input>
        </div>
        <div>
          <Button type="submit">Add</Button>
          <Button onClick={props.onAddMovieToList}>Cancel</Button>
        </div>
      </Card>
    </form>
  );
};

export default AddMovie;
