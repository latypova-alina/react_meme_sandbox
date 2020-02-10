import React, { useState } from 'react';
import './App.css';
import Meme from './Meme/Meme';
import { shuffle, objectBuilder } from './functions';

const CatsNum = 13
const MagicCat = 9
const DefaultImage = './lost_cat.jpg'

const app = props => {
  const [ catsCollection, setCats ] = useState({ cats: objectBuilder("./", ".jpg", CatsNum) });
  const [ showCats, setShowCats] = useState(false);

  const catsShuffleHandler = () => {
    setCats((prevState, props) => ({
      cats: shuffle(prevState.cats)
    }));
  }

  const clickCatHandler = (id) => {
    const catIndex = catsCollection.cats.findIndex(kitty => {
      return kitty.id === id;
    })

    const cat = { ...catsCollection.cats[catIndex] };

    cat.image = DefaultImage;

    const cats = [...catsCollection.cats];
    cats[catIndex] = cat;

    setCats({cats: id === MagicCat ? objectBuilder("./", ".jpg", CatsNum) : cats});
  }

  const hideCatsHandler = () => {
    setShowCats(!showCats);
  }

  let cats = showCats ? (
    catsCollection.cats.map(cat => {
      return (<Meme
        image_source={cat.image}
        key={cat.id}
        id={cat.id}
        click={() => clickCatHandler(cat.id)}/>
      )
    })
  ) : null

  const buttons = (click, text) => {
    return (
      <div className="row">
        <div className="column">
          <button onClick={click}>{text}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {buttons(hideCatsHandler, "Ukryj koty")}
      {cats}
      {buttons(catsShuffleHandler, "Energiya kota Borisa")}
    </div>
  )
}

export default app;
