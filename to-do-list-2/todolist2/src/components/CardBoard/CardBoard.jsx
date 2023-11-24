import Card from '../Card/Card';
import './CardBoard.css'
import AddCardButton from '../AddCardButton/AddCardButton';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';


const CardBoard = () => {
  const { cards } = useContext(AppContext);

  return (
    <section className='card-board'>
        <h3 className='title'>CardBoard</h3>
        { cards.map((card, index) => <Card key={index} data={card} indx={index} />)}
        <AddCardButton />
    </section>
  );
}

export default CardBoard;