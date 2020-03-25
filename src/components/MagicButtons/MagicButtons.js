import React from 'react';
import classes from '../../containers/App.css';

const magicButtons = (props) => (
  <div className={classes.row}>
    <div className={classes.column}>
      <button className={`${props.buttonClass}`} onClick={props.clicked}>{props.text}</button>
    </div>
  </div>
)

export default magicButtons;
