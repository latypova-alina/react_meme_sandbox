import React, { useState } from 'react';
import './App.css';
import Meme from './Meme/Meme';
import { shuffle, arrayBuilder } from './functions';

const CatsNum = 14

const app = props => {
  const [ catsCollection, setCats ] = useState({ cats: arrayBuilder("./", ".jpg", CatsNum) });

  const catsShuffleHandler = () => {
    setCats((prevState, props) => ({
      cats: shuffle(prevState.cats)
    }));
  }

  return (
    <div className="App">
      {catsCollection.cats.map(cat_image => { return <Meme image_source={cat_image}/> })}
      <button onClick={catsShuffleHandler}>Energiya kota Borisa</button>
    </div>
  )
}

export default app;
