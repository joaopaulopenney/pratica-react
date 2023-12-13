import { useState } from 'react';
import Card from '../Card/Card';
import './CardBoard.css';

const CardBoard = ({ cardBoard, cards, addCard }) => {

  const [id, setId] = useState(1);

  const [text, setText] = useState(`item ${id}`);

  const cardCreate = (text) => {
    const cardObj = { text: text, id: id };
    setId(id + 1);
    setText(`item ${id}`);
    addCard(cardObj);
  }

  return (
    <div id='cardboard'>
        <h3>{cardBoard.text}</h3>
        {cards.map((card) => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
        <button id={cardBoard.id} type='button' onClick={(e) => {
          console.log(e.target.id)
          console.log(cardBoard.id)
          if (e.target.id == cardBoard.id) {
            cardCreate(text)
          }
        }}>Add Card</button>
    </div>
  );
}

export default CardBoard;