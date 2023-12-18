import { useState } from "react";
import Header from "../components/Header/Header";
import CardBoard from "../components/CardBoard/CardBoard";
import './Home.css'

const Home = () => {

    const [cardBoards, setCardBoards] = useState([{ title: "To do", id: 1, items: [] }, { title: "Doing", id: 2, items: [] }, { title: "Done", id: 3, items: [] }]);

    const addCardBoard = (cardBoard) => {
      setCardBoards([...cardBoards, cardBoard]);
    }

    const addCard = (id, text) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          cardBoardsArray[i].items.push({text})
        }
      }

      setCardBoards(cardBoardsArray);
    }

    const deleteCard = (id, cardId) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          cardBoardsArray[i].items.splice(cardId, 1)
        }
      }

      setCardBoards(cardBoardsArray);
    }

    const moveUpCard = (id, fromIndex, toIndex) => {
      let cardBoardsArray = [...cardBoards];

      for (let i in cardBoardsArray) {
        if(cardBoardsArray[i].id == id) {
          cardBoardsArray[i].items.splice(fromIndex, 1);
          cardBoardsArray[i].items.splice(toIndex, 0, cardBoardsArray[i].items[fromIndex]);
        }
      }

      setCardBoards(cardBoardsArray);
    }

  return (
    <>
      <Header addCardBoard={addCardBoard} />
      <section id="cardboards-list">
        {cardBoards.map((cardBoard) => (
          <div key={cardBoard.id}>
            <CardBoard cardBoard={cardBoard} addCard={addCard} deleteCard={deleteCard} moveUpCard={moveUpCard} />
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;