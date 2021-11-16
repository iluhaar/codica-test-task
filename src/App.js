import { Outlet } from 'react-router-dom';
import './App.css';
import CitiesList from './components/CitiesList/CitiesList';
import Header from './components/Header/Header';



/**
 * * Реализовал добавление города в стейт и localStorage с Redux ToolKit, и запрос погоды SUMBITу импута, получилось только через React Hook UseEffect. 
 * * Так-же реализован роутинг, по клику переходит на нужный город. 
 * 
 * ! Стало интересно:
 * * Как лучше делать подобные запросы к API, вот например при перезагрузке страницы 
 * * мне нужно отправить n-запросов, но API не предоставляет возможность делать запрос погоду нескольких городов сразу?
 *  
 * 
 */



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
