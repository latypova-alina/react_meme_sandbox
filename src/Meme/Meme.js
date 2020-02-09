import React from 'react';

const meme = (props) => {
  return (
    <div className="Meme">
      <div className="row">
        <div className="column">
          <img src={props.image_source} />
        </div>
      </div>
    </div>
  );
};

export default meme;
