import React from 'react';
import Meme from './Meme/Meme';

const memes = (props) => props.collection.cats.map(cat => {
  return (
    <Meme
      image_source={cat.image}
      key={cat.id}
      id={cat.id}
      click={() => props.clicked(cat.id)}
    />
  )
});

export default memes;
