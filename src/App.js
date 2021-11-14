import { Outlet } from 'react-router-dom';
import './App.css';
import CitiesList from './components/CitiesList/CitiesList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CitiesList />
      <Outlet />
    </div>
  );
}

export default App;
