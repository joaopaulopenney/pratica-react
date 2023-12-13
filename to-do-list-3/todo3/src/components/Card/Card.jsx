import './Card.css';

const Card = ({ card }) => {
  return (
    <div>
        <p>{card.text}</p>
    </div>
  );
}

export default Card;