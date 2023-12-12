import './CardBoard.css';

const CardBoard = ({ cardBoard }) => {
  return (
    <div id='cardboard'>
        <h3>{cardBoard.text}</h3>
        <div id='cards'>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
            <p>item 5</p>
        </div>
    </div>
  );
}

export default CardBoard;