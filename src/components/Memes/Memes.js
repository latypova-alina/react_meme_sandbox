import React, { Component } from 'react';
import Meme from './Meme/Meme';

class Memes extends Component {
  shouldComponentUpdate(nextProps, nextState){
    console.log('Memes.js shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Memes.js getSnapshotBeforeUpdate');
    return {message: "Snapshot!"};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Memes.js componentDidUpdate');
    console.log(snapshot);
  }

  render(){
    return this.props.collection.cats.map(cat => (
      <Meme
        image_source={cat.image}
        key={cat.id}
        id={cat.id}
        click={() => this.props.clicked(cat.id)}
      />
    ));
  }
};

export default Memes;
