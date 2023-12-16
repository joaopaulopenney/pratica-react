import { useState } from 'react';
import './CardBoard.css';
import OpenCardDialog from '../OpenCardDialog/OpenCardDialog';
import Card from '../Card/Card';

const CardBoard = ({ cardBoard, addCard }) => {

  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }

  return (
    <div className='cardboard'>
      <h3 className='cb-title'>{cardBoard.title}</h3>
      <p className='cb-text'>Nenhum card adicionado</p>
      {cardBoard.items.map((item, index) => <Card key={index} item={item} />)}
      <OpenCardDialog open={openDialog} dialogHandler={dialogHandler} cardBoard={cardBoard} addCard={addCard} />
    </div>
  );
}

export default CardBoard;