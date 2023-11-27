import AppContext from "./AppContext";
import { useState } from "react";
import propTypes from 'prop-types';

const Provider = ({ children }) => {
    const [cardBoards, setCardBoards] = useState([]);
    const [cards, setCards] = useState([]);

    const value = {
        cards,
        setCards,
        cardBoards, 
        setCardBoards,
    };

    return (
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;