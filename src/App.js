import React, { useState } from 'react';
import './App.css';
import Meme from './Meme/Meme';
import { shuffle, arrayBuilder } from './functions';

const CatsNum = 14

const app = props => {
  const [ catsCollection, setCats ] = useState({ cats: arrayBuilder("./", ".jpg", CatsNum) });

  const buildCatsArray = (catsArray = []) => {
    for (let j = 0; j < CatsNum; j++) {
      catsArray.push(<Meme image_source={catsCollection.cats[j]}/>)
    }

    return catsArray
  }

  const catsShuffleHandler = () => {
    setCats((prevState, props) => ({
      cats: shuffle(prevState.cats)
    }));
  }

  return (
    <div className="App">
      {buildCatsArray()}
      <button onClick={catsShuffleHandler}>Energiya kota Borisa</button>
    </div>
  )
}

export default app;
