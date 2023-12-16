import { useState } from "react";
import Header from "../components/Header/Header";
import CardBoard from "../components/CardBoard/CardBoard";

const Home = () => {

    const [cardBoards, setCardBoards] = useState([{ title: "To do", id: 1, items: [] }, { title: "Doing", id: 2, items: [] }, { title: "Done", id: 3, items: [] }]);

    const addCardBoard = (cardBoard) => {
      setCardBoards([...cardBoards, cardBoard]);
    }

    const addCard = (id, text) => {
      var cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
        cardBoardsArray[i].items.push({text})
        }
      }

      setCardBoards(cardBoardsArray);
      console.log(cardBoards)
    }

  return (
    <>
      <Header addCardBoard={addCardBoard} />
      <section id="cardboards-list" style={{display: "flex"}}>
        {cardBoards.map((cardBoard) => (
          <div key={cardBoard.id}>
            <CardBoard cardBoard={cardBoard} addCard={addCard} />
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;