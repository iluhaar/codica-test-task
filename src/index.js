import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CityItem from './components/CityItem/CityItem';
import Sample from './components/Sample';
import CitiesList from './components/CitiesList/CitiesList';
import store from './app/store.js'
import { Provider } from 'react-redux';

// console.log(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/cities" element={<CitiesList />} />
          <Route path="cities/:cityName" element={<CityItem />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
