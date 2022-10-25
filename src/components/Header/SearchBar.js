import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const searchWord = (event) => {
    props.setSearchWord(event.target.value);
  };

  return (
    <div className={classes.search}>
      <input type="text" placeholder="Search..." onChange={searchWord}></input>
    </div>
  );
};

export default SearchBar;
