import { Link } from 'react-router-dom';
import './App.css';
import CitysList from './components/CitysList/CitysList';

function App() {
  return (
    <div className="App">
      <CitysList />
      <Link to="/"/>
      <Link to="/city:name" />
    </div>
  );
}

export default App;
