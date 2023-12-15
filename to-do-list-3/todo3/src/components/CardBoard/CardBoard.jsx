import { useState } from 'react';
import './CardBoard.css';
import OpenCardDialog from '../OpenCardDialog';
import Card from '../Card/Card';

const CardBoard = ({ cardBoard, addCard }) => {

  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }

  return (
    <div id='cardboard'>
      <h3>{cardBoard.title}</h3>
      {cardBoard.items.map((item, index) => <div key={index}><Card item={item} /></div>)}
      <OpenCardDialog open={openDialog} dialogHandler={dialogHandler} cardBoard={cardBoard} addCard={addCard} />
    </div>
  );
}

export default CardBoard;