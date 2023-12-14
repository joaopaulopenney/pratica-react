import { useState } from 'react';
import './CardBoard.css';
import OpenCardDialog from '../OpenCardDialog';

const CardBoard = ({ cardBoard }) => {

  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }

  const cardCreate = () => {
    cardBoard.items.push("item")
    console.log(cardBoard.items)
  }

  return (
    <div id='cardboard'>
        <h3>{cardBoard.title}</h3>
        <OpenCardDialog open={openDialog} dialogHandler={dialogHandler} cardBoard={cardBoard} />
    </div>
  );
}

export default CardBoard;