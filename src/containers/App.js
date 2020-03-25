import React, { useState } from 'react';
import Memes from '../components/Memes/Memes';
import MagicButtons from '../components/MagicButtons/MagicButtons';
import { shuffle, objectBuilder } from '../functions';
import classes from "./App.css";

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
    <Memes
      clicked={clickCatHandler}
      collection={catsCollection}
    />
  ) : null

  return (
    <div className={classes.App}>
      <MagicButtons
        clicked={hideCatsHandler}
        text="Ukryj koty"
        buttonClass={classes.Hiding}
      />
      {cats}
      <MagicButtons
        clicked={catsShuffleHandler}
        text="Energiya kota Borisa"
        buttonClass={classes.Shuffling}
      />
    </div>
  )
}

export default app;
