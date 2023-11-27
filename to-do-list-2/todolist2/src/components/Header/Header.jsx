import AddCardBoardButton from "../AddCardBoardButton/AddCardBoardButton";

import './Header.css'

const Header = () => {
  return (
    <header className="header">
            <h1>Kanban do projeto</h1>
            <AddCardBoardButton />
    </header>
  )
}

export default Header;