import { useState } from "react";
import Header from "../components/Header/Header";
import CardBoard from "../components/CardBoard/CardBoard";

const Home = () => {

    const [cardBoards, setCardBoards] = useState([]);

    const [cards, setCards] = useState([]);

    const addCardBoard = (cardBoard) => {
      setCardBoards([...cardBoards, cardBoard]);
    }

    const addCard = (card) => {
      setCards([...cards, card]);
    }

  return (
    <>
      <Header addCardBoard={addCardBoard} />
      <section id="cardboards-list">
        {cardBoards.map((cardBoard) => (
          <div key={cardBoard.id}>
            <CardBoard cardBoard={cardBoard} cards={cards} addCard={addCard} />
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;