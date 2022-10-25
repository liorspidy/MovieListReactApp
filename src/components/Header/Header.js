import classes from './Header.module.css';
import SearchBar from './SearchBar';
import Button from '../../UI/Button';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  const history = useHistory();

  const goToMainPage = () => {
    history.push('/');
    props.onMovieListApp();
  };

  const goToAddMovie = () => {
    history.push('/AddMovie');
    props.onAddMovie();
  };

  const goToMovieList = () => {
    history.push('/MovieList');
    props.onMovieList();
  };

  return (
    <header className={classes.header}>
      <h1 onClick={goToMainPage}>Movie List App</h1>
      <div className={classes.actions}>
        <SearchBar setSearchWord={props.setSearchWord} />
        <div>
          <Button onClick={goToAddMovie}>Add Movie</Button>
          <Button onClick={goToMovieList}>Movie List</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
