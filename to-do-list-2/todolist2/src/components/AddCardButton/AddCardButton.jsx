import { useContext } from 'react';
import './AddCardButton.css'
import AppContext from '../../context/AppContext';

const AddCardButton = () => {
  const { cards, setCards } = useContext(AppContext);

  const handleAddCard = () => {
    
  }

  return (
    <button type='button' className='add-card-button' onClick={handleAddCard}>+ ADICIONAR OUTRO CARD</button>
  );
}

export default AddCardButton;