import React from 'react';

const meme = (props) => {
  return (
    <div className="Meme">
      <div className="row">
        <div className="column">
          <img id={props.id} src={props.image_source} onClick={props.click}/>
        </div>
      </div>
    </div>
  );
};

export default meme;
