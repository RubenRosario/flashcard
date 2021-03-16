import React from 'react';

import './Card.css';

const flip = () => {
  document.getElementsByClassName('card')[0].classList.toggle('is-flipped');
};

const Card = (props) => {
  const word = props.front;
  const { verb, noun, usage, translation } = props.back;
  console.log(`${verb} ${noun} ${usage} ${translation}`);
  return (
    <div className="scene scene--card">
      <div className="card" onClick={flip}>
        <div className="card__face card__face--front">{word}</div>
        <div className="card__face card__face--back">
          <ul>
            verb:{' '}
            {verb.map((w) => (
              <li>{w}</li>
            ))}
            {/* <li>{`noun: ${noun.foreach((w) => <span>{w}</span>)}`}</li>
            {usage && (
              <li>{`usage: ${usage.foreach((w) => <span>{w}</span>)}`}</li>
            )}
            <li>{`translation: ${translation}`}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
