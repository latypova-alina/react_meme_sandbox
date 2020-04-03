import React, { Component } from 'react';
import Memes from '../components/Memes/Memes';
import MagicButtons from '../components/MagicButtons/MagicButtons';
import { shuffle, objectBuilder } from '../functions';
import classes from "./App.css";

const CatsNum = 13
const MagicCat = 9
const DefaultImage = './lost_cat.jpg'

class App extends Component {
  state = {
    cats: objectBuilder("./", ".jpg", CatsNum),
    showCats: false
  }

  catsShuffleHandler = () => {
    this.setState((prevState) => ({
      cats: shuffle(prevState.cats)
    }));
  }

  clickCatHandler = (id) => {
    const catIndex = this.state.cats.findIndex(kitty => {
      return kitty.id === id;
    })

    const cat = { ...this.state.cats[catIndex] };

    cat.image = DefaultImage;

    const cats = [...this.state.cats];
    cats[catIndex] = cat;

    this.setState({
      cats: (id === MagicCat) ? objectBuilder("./", ".jpg", CatsNum) : cats
    });
  }

  hideCatsHandler = () => {
    this.setState((prevState) => ({
      showCats: !prevState.showCats
    }));
  }

  render() {
    let cats = this.state.showCats ? (
      <Memes
        clicked={this.clickCatHandler}
        collection={this.state}
      />
    ) : null;

    return (
      <div className={classes.App}>
        <MagicButtons
          clicked={this.hideCatsHandler}
          text="Ukryj koty"
          buttonClass={classes.Hiding}
        />
        {cats}
        <MagicButtons
          clicked={this.catsShuffleHandler}
          text="Energiya kota Borisa"
          buttonClass={classes.Shuffling}
        />
      </div>
    );
  }

  return
}

export default App;
