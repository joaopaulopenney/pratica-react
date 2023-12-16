import { useState } from 'react';
import './Header.css';

const Header = ({ addCardBoard }) => {

  const [id, setId] = useState(4);

  const [title, setTitle] = useState(`CardBoard ${id}`);

  const cardBoardCreate = () => {
    const cardBoardObj = { title: title, id: id, items: [] };
    setId(id + 1);
    setTitle(`CardBoard ${id + 1}`);
    addCardBoard(cardBoardObj);
  }

  return (
    <header id='header'>
        <h1>Kanban do projeto</h1> 
        <button type='button' className='btn' onClick={() => cardBoardCreate()}>+ ADICIONAR OUTRO CARDBOARD</button>
    </header>
  );
}

export default Header;