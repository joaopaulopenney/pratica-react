import './Card.css';

const Card = ({ item }) => {
  return (
    <div className='card'>
      <p>{item.text}</p>
    </div>
  );
}

export default Card;