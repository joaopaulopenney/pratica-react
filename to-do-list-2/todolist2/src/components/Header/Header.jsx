import AddCardBoardButton from "../AddCardBoardButton/AddCardBoardButton";

const Header = () => {
  return (
    <header className="header">
        <div>
            <h1>Kanban do projeto</h1>
            <AddCardBoardButton />
        </div>
    </header>
  )
}

export default Header;