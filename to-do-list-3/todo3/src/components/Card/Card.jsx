import './Card.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import OpenMoveCardDialog from '../OpenMoveCardDialog/OpenMoveCardDialog';

const Card = ({ item, id, deleteCard, cardBoard, moveCard, open, dialogHandler, cardBoardsDialog }) => {

  return (
    <div className='card'>
      <p>{item.text}</p>
      <div className='icons'>
        <button type='button' className='icon' onClick={() => { 
            if (id >= 1) {
              moveCard(cardBoard.id, id, id - 1);
            }
          }}><ExpandLessIcon /></button>
        <button type='button' className='icon' onClick={() => { 
            if (id <= cardBoard.items.length - 1) {
              moveCard(cardBoard.id, id, id + 1);
            }
          }}><ExpandMoreIcon /></button>
        <button type='button' className='icon' onClick={dialogHandler}><OpenMoveCardDialog open={open} dialogHandler={dialogHandler} cardBoardsDialog={cardBoardsDialog} /><MoveToInboxIcon /></button>
        <button type='button' className='icon' onClick={() => deleteCard(cardBoard.id, id)}><HighlightOffIcon /></button>
      </div>
    </div>
  );
}

export default Card;