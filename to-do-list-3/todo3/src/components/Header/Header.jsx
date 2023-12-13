import { useState } from 'react';
import './Header.css';

const Header = ({ addCardBoard }) => {

  const [id, setId] = useState(1);

  const [text, setText] = useState(`CardBoard ${id}`);

  const cardBoardCreate = (text) => {
    const cardBoardObj = { text: text, id: id };
    setId(id + 1);
    setText(`CardBoard ${id + 1}`);
    addCardBoard(cardBoardObj);
  }

  return (
    <header id='header'>
        <h1>Título</h1> 
        <button type='button' onClick={() => cardBoardCreate(text)}>Criar o CardBoard</button>
    </header>
  );
}

export default Header;