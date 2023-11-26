import AddCardButton from '../AddCardButton/AddCardButton';
import Card from '../Card/Card';
import './CardBoards.css';

const CardBoard = () => {

  return (
    <section className='card-board'>
        <h3 className='title'>CardBoard</h3>
        <Card />
        <AddCardButton />
    </section>
  );
}

export default CardBoard;