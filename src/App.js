import { Fragment, useState } from 'react';
import AddMovie from './components/AddMovie';
import Header from './components/Header/Header';
import MovieList from './components/MovieList';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import { useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();
  const [isAddMovieVisible, setIsAddMovieVisible] = useState(false);
  const [isMovieListVisible, setIsMovieListVisible] = useState(false);
  const [searchWord, setSearchWord] = useState('');

  const onAddMovie = () => {
    setIsAddMovieVisible(true);
    setIsMovieListVisible(false);
  };

  const onMovieList = () => {
    setIsAddMovieVisible(false);
    setIsMovieListVisible(true);
  };

  const onMovieListApp = () => {
    setIsAddMovieVisible(false);
    setIsMovieListVisible(false);
  };

  const onAddMovieToList = () => {
    history.replace('/MovieList');
    onMovieList();
  };

  return (
    <Fragment>
      <Header
        onAddMovie={onAddMovie}
        onMovieList={onMovieList}
        setSearchWord={setSearchWord}
        onMovieListApp={onMovieListApp}
      />
      <Switch>
        {!isAddMovieVisible && !isMovieListVisible && (
          <Route to="/">
            <HomePage />
          </Route>
        )}
        {isAddMovieVisible && (
          <Route to="/AddMovie">
            <AddMovie
              onAddMovie={onAddMovie}
              onAddMovieToList={onAddMovieToList}
            />
          </Route>
        )}
        {isMovieListVisible && (
          <Route to="/MovieList">
            <MovieList searchWord={searchWord} />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
