import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/App.css';

import { getWeather } from '../store/slices/weather/thunks';
import { findWeatherCity } from '../store/slices/weather/weatherSlice';
import logo from '../rainy-1.svg';
export const Weather = () => {
  const dispatch = useDispatch();
  const { dataWheather, isLoading } = useSelector((state) => state.weather);

  const [city, setCity] = useState('');

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <p>Wheather App </p>
        <p>Escribe el nombre de una ciudad</p>
        <p>Ejemplo: London, UK</p>

        <div>
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            name="city"
          />
          <button>Mi Ubicación</button>
          <button onClick={() => dispatch(findWeatherCity(city))}>
            Buscar
          </button>
        </div>
        <div>
          <p>{isLoading ? 'Loading...' : null}</p>

          <p>
            {dataWheather.next_days
              ? dataWheather.next_days.map((elem, index) => (
                  <div style={{ display: 'inline-block' }}>
                    <img key={index} src={elem.iconURL} />

                    <p>
                      {' '}
                      {elem.max_temp.c}C - {elem.max_temp.c} F
                    </p>
                  </div>
                ))
              : null}
          </p>

          <ul></ul>
        </div>
        <p></p>
      </header>
    </div>
  );
};
