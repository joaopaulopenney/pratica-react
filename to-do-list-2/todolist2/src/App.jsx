import './App.css';
import Header from './components/Header/Header';
import CardBoards from './components/CardBoards/CardBoards';
import Provider from './context/Provider';

function App() {

  return (
    <Provider>
      <Header />
      <CardBoards />
    </Provider>
  )
}

export default App;
