import React from 'react';
import ReactDOM from 'react-dom/client';
import {namee, agee} from './person.js';
import message from './message.js';
import Car5 from './car.js';
import { useState, useEffect, createContext, useContext, useRef, useReducer, useCallback, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import Blogs from './pages/Blogs.js';
import Contact from './pages/Contact.js';
import NoPage from './pages/NoPage.js';
import Todos from './Todos';
import './App.css';
import Car50 from './car2.js';
import './my-sass.scss';
import Todos3 from './Todos2.js';
import useFetch from './useFetch.js'

// ReactDOM atualizado
const meuPrimeiroElemento = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(meuPrimeiroElemento);

// ES6 - Classes
class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  

    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();

// ES6 Métodos Array
const myArray = ['apple', 'banana', 'orange'];

const myList =myArray.map((item) => <p>{item}</p>)

// ES6 Desestruturação
// // Modo antigo para atribuir itens de arrays em variáveis
// const vehicles = ['mustang', 'f-150', 'expedition'];
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// Modo atualizado para atribuir itens de arrays em variáveis
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide]
}

const [add, subtract, multiply, divide] = calculate(4, 7);

// Desestruturando Objetos 
//   // Modo antigo
//   const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
  
//   myVehicle(vehicleOne);
  
//   function myVehicle(vehicle) {
//     const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
//   }
  // Modo atualizado
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
  
myVehicle(vehicleOne);
  
function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
}
  
myVehicleTwo(vehicleTwo)

function myVehicleTwo({model, registration: {state}}) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
}

// ES6 Operador de Propagação (spread)
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

const numbersCombined = [...numbersOne, ...numbersTwo];


const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;


const myVehiclee = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
  
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
}
  
const myUpdatedVehicle = {...myVehiclee, ...updateMyVehicle}

// ES6 Módulos
// No começo do documento para não dar erro (imports)

// ES6 Operador Ternário

const authenticated = () => {}

const renderApp = () => {}

const renderLogin = () => {}

if (authenticated) {
    renderApp();
} else {
    renderLogin();
}

authenticated ? renderApp() : renderLogin();

// React Render HTML
const container2 = document.getElementById('root2');
const root2 = ReactDOM.createRoot(container2);
root2.render(<p>Hello</p>);

const myelement = (
    <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
            </tr>
            <tr>
                <td>Elsa</td>
            </tr>
        </tbody>
    </table>
);

const container3 = document.getElementById('root3');
const root3 = ReactDOM.createRoot(container3);
root3.render(myelement)

// React JSX
// COM JSX
const myElement = <h1>I Love JSX!</h1>;

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(myElement);

// SEM JSX
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');

// const root5 = ReactDOM.createRoot(document.getElementById('root5'));
// root5.render(myElement);

const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>;

// Inserindo um bloco grande de HTML com JSX (uso dos parênteses)
const myElement3 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
);

const myElement4 = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>
);

// Uso do fragment
const myElement5 = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
);

// Os elementos precisam ser fechados (/>)
const myElement6 = <input type="text" />;

// Com o uso do JSX não se usa o class e sim o className
const myElement7 = <h1 className="myclass">Hello World</h1>;

// Condicional com JSX
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement8 = <h1>{text}</h1>;


const y = 5;

const myElement9 = <h1>{(y) < 10 ? "Hello" : "Goodbye"}</h1>;

// React Componentes
function Car2() {
    return <h2>Hi, I am a Car!</h2>;
}

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(<Car2 />);

function Car3(props) {
    return <h2>I am a {props.color} Car!</h2>
}

const root7 = ReactDOM.createRoot(document.getElementById('root7'))
root7.render(<Car3 color="red"/>)

function Car4() {
    return <h2>I am a Car!</h2>;
}
  
function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car4 />
      </>
    );
}
  
const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(<Garage />);

// Componentes devem ficar em arquivos separados (importado no início do documento)
const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(<Car5 />);

// React Class Components (pulei por enquanto)


// React Props
const myElement10 = <Car6 brand="Ford" />;

function Car6(props) {
    return <h2>I am a { props.brand }!</h2>;
}



function Car7(props) {
    return <h2>I am a { props.brand }!</h2>;
}
  
function Garage2() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car7 brand="Ford" />
      </>
    );
}
  
const root10 = ReactDOM.createRoot(document.getElementById('root10'));
root10.render(<Garage2 />);



function Car8(props) {
    return <h2>I am a { props.brand }!</h2>;
}
  
function Garage3() {
    const carName = "Ford";
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car8 brand={ carName } />
      </>
    );
}
  
const root11 = ReactDOM.createRoot(document.getElementById('root11'));
root11.render(<Garage3 />);



function Car9(props) {
    return <h2>I am a { props.brand.model }!</h2>;
}
  
function Garage4() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car9 brand={ carInfo } />
      </>
    );
 }
  
const root12 = ReactDOM.createRoot(document.getElementById('root12'));
root12.render(<Garage4 />);

// React Events
const shoot = () => {}
<button onClick={shoot}>Take the Shot!</button>

// no HTML - <button onclick="shoot()">Take the Shot!</button>

function Football() {
  const shoot2 = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot2}>Take the shot!</button>
  );
}

const root13 = ReactDOM.createRoot(document.getElementById('root13'));
root13.render(<Football />);

// Passando Argumentos para os eventos
function Football2() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

const root14 = ReactDOM.createRoot(document.getElementById('root14'));
root14.render(<Football2 />);

// Objeto de evento React
function Football3() {
  const shoot = (a, b) => {
    alert(b.type);
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const root15 = ReactDOM.createRoot(document.getElementById('root15'));
root15.render(<Football3 />)

// React Conditionals
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal
  if (isGoal) {
    return <MadeGoal />
  }
  return <MissedGoal />
}

const root16 = ReactDOM.createRoot(document.getElementById('root16'));
root16.render(<Goal isGoal={false} />);

const root17 = ReactDOM.createRoot(document.getElementById('root17'));
root17.render(<Goal isGoal={true} />);

// Condicional com o operador &&
function Garage5(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root18 = ReactDOM.createRoot(document.getElementById('root18'));
root18.render(<Garage5 cars={cars} />);

const cars2 = [];
const root19 = ReactDOM.createRoot(document.getElementById('root19'));
root19.render(<Garage5 cars={cars2} />);

// Condicional com ternário (usando as funções usadas no exemplo do if)
function Goal2(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

const root20 = ReactDOM.createRoot(document.getElementById('root20'));
root20.render(<Goal2 isGoal={false} />);

// React Lists
function Car10(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage6() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car10 brand={car} />)}
      </ul>
    </>
  );
}

const root21 = ReactDOM.createRoot(document.getElementById('root21'));
root21.render(<Garage6 />);


function Car11(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage7() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car11 key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root22 = ReactDOM.createRoot(document.getElementById('root22'));
root22.render(<Garage7 />);

// React Forms
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root23 = ReactDOM.createRoot(document.getElementById('root23'));
root23.render(<MyForm />);

// importar o useState (no início do documento)
function MyForm2() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root24 = ReactDOM.createRoot(document.getElementById('root24'));
root24.render(<MyForm2 />)

function MyForm3() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root25 = ReactDOM.createRoot(document.getElementById('root25'));
root25.render(<MyForm3 />);



function MyForm4() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root26 = ReactDOM.createRoot(document.getElementById('root26'));
root26.render(<MyForm4 />);


function MyForm5() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root27 = ReactDOM.createRoot(document.getElementById('root27'));
root27.render(<MyForm5 />);


function MyForm6() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

const root28 = ReactDOM.createRoot(document.getElementById('root28'));
root28.render(<MyForm6 />);


// React Router (importar no começo do documento (
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// ))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root29 = ReactDOM.createRoot(document.getElementById('root29'));
root29.render(<App />);

// React Memo
const App2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root30 = ReactDOM.createRoot(document.getElementById('root30'));
root30.render(<App2 />);

// React CSS Styling
const Header = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  )
}

const Header2 = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  )
}

const Header3 = () => {
  const MyStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={MyStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

// importar o css externo (import './App.css') no topo do documento 

// importar o css em modulos (import styles from './my-style.module.css') no documento externo (car2.js)

const root31 = ReactDOM.createRoot(document.getElementById('root31'));
root31.render(<Car50 />);

// React Sass Styling 
// criar um arquivo com .scss
// importar o arquivo (import './my-sass.scss')
const Header4 = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root32 = ReactDOM.createRoot(document.getElementById('root32'));
root32.render(<Header4 />);

// React Hooks
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const root33 = ReactDOM.createRoot(document.getElementById('root33'));
root33.render(<FavoriteColor />);

// Hook useState
// importar no início do documento (import { useState } from "react)"
function FavoriteColor2() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button 
      type="button"
      onClick={() => setColor("blue")}>Blue</button>
    </>
  )
}

const root34 = ReactDOM.createRoot(document.getElementById('root34'));
root34.render(<FavoriteColor2 />);

function Car12() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

const root35 = ReactDOM.createRoot(document.getElementById('root35'));
root35.render(<Car12 />)

function Car13() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const root36 = ReactDOM.createRoot(document.getElementById('root36'));
root36.render(<Car13 />)

function Car14() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button 
      type="button"
      onClick={updateColor}>Blue</button>
    </>
  )
}

const root37 = ReactDOM.createRoot(document.getElementById('root37'));
root37.render(<Car13 />)

// Hook useEffect 
// importar o useEffect no começo do documento (import { useState, useEffect } from 'react')
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  }, []);

  return <h1>I've rendered {count} times!</h1>
}

const root38 = ReactDOM.createRoot(document.getElementById('root38'));
root38.render(<Timer />)

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root39 = ReactDOM.createRoot(document.getElementById('root39'));
root39.render(<Counter />);

function Timer2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root40 = ReactDOM.createRoot(document.getElementById('root40'));
root40.render(<Timer2 />);

// Hook useContext
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root41 = ReactDOM.createRoot(document.getElementById('root41'));
root41.render(<Component1 />);

const UserContext = createContext()

function Component10() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component11 user={user} />
    </UserContext.Provider>
  );
}

function Component11() {
  return (
    <>
      <h1>Component 11</h1>
      <Component12 />
    </>
  );
}

function Component12() {
  return (
    <>
      <h1>Component 12</h1>
      <Component13 />
    </>
  );
}

function Component13() {
  return (
    <>
      <h1>Component 13</h1>
      <Component14 />
    </>
  );
}

function Component14() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 14</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root42 = ReactDOM.createRoot(document.getElementById('root42'));
root42.render(<Component10 />);

// Hook useRef
// importar o useRef no início do documento (import { useRef } from "react");
function App3() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

const root43 = ReactDOM.createRoot(document.getElementById('root43'));
root43.render(<App3 />)

function App4() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root44 = ReactDOM.createRoot(document.getElementById('root44'));
root44.render(<App4 />)

function App5() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue; 
  }, [inputValue]);

  return (
    <>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

const root45 = ReactDOM.createRoot(document.getElementById('root45'));
root45.render(<App5 />);

// Hook useReducer
// importar o useReducer no início do documento (import { useReducer } from "react")

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos2() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root46 = ReactDOM.createRoot(document.getElementById('root46'));
root46.render(<Todos2 />);

// Hook useCallback
// importar o useCallback e o documento (Todos2.js) no início do documento
const App6 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1)
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos3 todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root47 = ReactDOM.createRoot(document.getElementById('root47'));
root47.render(<App6 />);

// Hook useNemo
// importar o useNemo no início do documento (import { useMemo } from "react")
const App7 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  }
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const root48 = ReactDOM.createRoot(document.getElementById('root48'));
root48.render(<App7 />);

// Custom Hooks
const Home2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root49 = ReactDOM.createRoot(document.getElementById('root49'));
root49.render(<Home2 />);

// transformando a função em reutilizável (importar o documento useFetch)
const Home3 = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root50 = ReactDOM.createRoot(document.getElementById('root50'));
root50.render(<Home3 />);