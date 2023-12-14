import { useState } from 'react';
import './Header.css';

const Header = ({ addCardBoard }) => {

  const [id, setId] = useState(1);

  const [title, setTitle] = useState("");

  const cardBoardCreate = (title) => {
    const cardBoardObj = { title: title, id: id, items: [] };
    setId(id + 1);
    setTitle(`CardBoard ${id}`);
    addCardBoard(cardBoardObj);
  }

  return (
    <header id='header'>
        <h1>Título</h1> 
        <button type='button' onClick={() => cardBoardCreate(title)}>Criar o CardBoard</button>
    </header>
  );
}

export default Header;