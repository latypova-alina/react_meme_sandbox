import React, { useEffect } from 'react';
import Meme from './Meme/Meme';

const memes = (props) => props.collection.cats.map(cat => {
  useEffect(() => {
    console.log("Memes.js useEffect");

    //здесь мог быть ваш эйчтитипи реквест
    setTimeout(() => {
      alert('Saved fake data');
    }, 1000);

    return () => {
      console.log("Memes.js cleanup work in useEffect");
    };
  }, [cat.id]);

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
