import { useSelector } from 'react-redux';
import './App.css';
import CardsList from './components/CardList/CardsList';
import Header from './components/Header/Header';

function App() {

  

  return (
    <div className=" bg-bg-image h-screen">
      <Header />
      <CardsList />
    </div>
  );
}

export default App;
