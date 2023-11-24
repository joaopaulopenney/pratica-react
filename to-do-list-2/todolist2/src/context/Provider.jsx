import AppContext from "./AppContext";
import { useState } from "react";
import propTypes from 'prop-types';

const Provider = ({ children }) => {
    const [cards, setCards] = useState([]);

    const value = {
        cards,
        setCards,
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