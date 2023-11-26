import './App.css';
import Header from './components/Header/Header';
import CardBoards from './components/CardBoards/CardBoards';
import Provider from './context/Provider';
import Form from './components/Form/Form';

function App() {

  return (
    <Provider>
      <Header />
      <CardBoards />
      <Form />
    </Provider>
  )
}

export default App;
