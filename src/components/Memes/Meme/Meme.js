import React, { Component } from 'react';
import classes from '../../../containers/App.css';

class Meme extends Component {
  render(){
    console.log('Meme.js render');
    return (
      <div className={classes.row}>
        <div className={classes.column}>
          <img id={this.props.id} src={this.props.image_source} onClick={this.props.click}/>
        </div>
      </div>
    );
  }
};

export default Meme;
