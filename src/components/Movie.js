import classes from './Movie.module.css';
import Card from '../UI/Card';

const Movie = (props) => {
  return (
    <Card>
      <div className={classes.movie}>
        <button className={classes.xButton} onClick={props.removeMovie}>
          X
        </button>
        <div>
          <img src={props.img} alt={props.name}></img>
        </div>
        <div className={classes.inputs}>
          <h1 className={classes.name}>{props.name}</h1>
          <p className={classes.desc}>{props.description}</p>
          <div className={classes.gradeBox}>
            <h2 className={classes.grade}>{props.imdbGrade}</h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Movie;
