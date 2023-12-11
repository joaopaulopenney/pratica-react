import { useState } from "react";
import Header from "../components/Header/Header";

const Home = () => {

    const [cardBoards, setCardBoards] = useState([]);

  return (
    <Header />
  );
}

export default Home;