import { useState } from "react";
import Header from "../components/Header/Header";
import CardBoard from "../components/CardBoard/CardBoard";

const Home = () => {

    const [cardBoards, setCardBoards] = useState([]);

    const addCardBoard = (cardBoard) => {
      setCardBoards([...cardBoards, cardBoard]);
      console.log(cardBoards);
    }

  return (
    <>
      <Header addCardBoard={addCardBoard} />
      <section id="cardboards-list">
        {cardBoards.map((cardBoard) => (
          <div key={cardBoard.id}>
            <CardBoard cardBoard={cardBoard} />
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;