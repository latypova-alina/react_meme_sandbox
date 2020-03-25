import React from 'react';
import classes from '../../../containers/App.css';

const meme = (props) => {
  return (
    <div className={classes.row}>
      <div className={classes.column}>
        <img id={props.id} src={props.image_source} onClick={props.click}/>
      </div>
    </div>
  );
};

export default meme;
