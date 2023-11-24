import './App.css';
import Header from './components/Header/Header';
import CardBoard from './components/CardBoard/CardBoard';
import Provider from './context/Provider';
import Form from './components/Form/Form';

function App() {

  return (
    <Provider>
      <Header />
      <CardBoard />
      <Form />
    </Provider>
  )
}

export default App;
