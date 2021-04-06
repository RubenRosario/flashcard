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
          <ul>
            <li>
              {'It is a(n)'}
              <ul>
                {definition.is.map((x) => (
                  <li>{x}</li>
                ))}
              </ul>
            </li>
            <li>
              {'Meaning'}
              <ul>
                {definition.meaning.map((x) => (
                  <li>{x}</li>
                ))}
              </ul>
            </li>
            <li>
              {'Synonymous'}
              <ul>
                {definition.synonymous.map((x) => (
                  <li>{x}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
