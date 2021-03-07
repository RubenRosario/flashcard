import React from 'react';

import './Card.css';

const flip = () => {
  document.getElementsByClassName('card')[0].classList.toggle('is-flipped');
};

const Card = (props) => {
  return (
    <div className="scene scene--card">
      <div className="card" onClick={flip}>
        <div className="card__face card__face--front">front</div>
        <div className="card__face card__face--back">back</div>
      </div>
    </div>
  );
};

export default Card;
