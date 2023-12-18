import './Card.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Card = ({ item, id, deleteCard, cardBoard, moveUpCard }) => {
  return (
    <div className='card'>
      <p>{item.text}</p>
      <div className='icons'>
        <button type='button' className='icon' onClick={() => moveUpCard(cardBoard.id, id, id + 1)}><ExpandLessIcon /></button>
        <button type='button' className='icon'><ExpandMoreIcon /></button>
        <button type='button' className='icon'><MoveToInboxIcon /></button>
        <button type='button' className='icon' onClick={() => deleteCard(cardBoard.id, id)}><HighlightOffIcon /></button>
      </div>
    </div>
  );
}

export default Card;