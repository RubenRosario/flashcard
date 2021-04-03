import React from 'react';

import './Card.css';

const flip = () => {
  document.getElementsByClassName('card')[0].classList.toggle('is-flipped');
};

const Card = (props) => {
  const word = props.front;
  const definition = props.back;
  return (
    <div className="scene scene--card">
      <div className="card" onClick={flip}>
        <div className="card__face card__face--front">{word}</div>
        <div className="card__face card__face--back">
          {JSON.stringify(definition)}
        </div>
      </div>
    </div>
  );
};

export default Card;
