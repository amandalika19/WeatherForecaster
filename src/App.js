import logo from './logo.svg';
import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

function App() {
  //useStates to store details - latitude, longitude, date, day/night, weather and errors
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [date, setDate] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
      e.preventDefault();

      //error checking and validation of user input
      if (!latitude || !longitude || !date || !timePeriod) {
          setError("Error: One or more fields are missing - Check to see what you've missed!");
          setWeatherData(null);
          return;
      }

      let response;
      try {
          response = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`);
      } catch (error) {
          if (error.response.status === 404) {
              setError('Error: Location not found');
          } else {
              setError('Error: Failed to fetch weather data');
          }
          setWeatherData(null);
          return;
      }

      //get json details from api call
      const locationProperties = response.data.properties;
      const area = `${locationProperties.relativeLocation.properties.city}, ${locationProperties.relativeLocation.properties.state}`;
      const locationForecastURL = locationProperties.forecast;

      const forecastResponse = await axios.get(locationForecastURL);
      const periods = forecastResponse.data.properties.periods;

      const weatherForecast = periods ? periods.filter(p => {
          const periodDate = new Date(p.startTime).toLocaleDateString();
          if (timePeriod === "Night") {
              return periodDate === new Date(date).toLocaleDateString() && p.name.includes('Night');
          } else {
              return periodDate === new Date(date).toLocaleDateString() && !p.name.includes('Night');
          }
      }) : [];

      if (weatherForecast.length === 0) {
          setError('Error: No weather data available for the selected date/time period - Try selecting a date closer to the next 7 days.');
          setWeatherData(null);
          return;
      }

      setLocation(area);
      setWeatherData(weatherForecast[0]);
      setError(null);
  };

  return (
      <div>
          <header>
              <h1>Weather Forecaster</h1>
          </header>
          <form onSubmit={handleSubmit}>
              <div>
                  <label>
                      Latitude:
                      <input type="text" value={latitude} onChange={e => setLatitude(e.target.value)} />
                  </label>
              </div>
              <div>
                  <label>
                      Longitude:
                      <input type="text" value={longitude} onChange={e => setLongitude(e.target.value)}/>
                  </label>
              </div>
              <div>
                  <label>
                      Date:
                      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                  </label>
              </div>
              <div>
                  <label>
                      Time Period:
                      <select value={timePeriod} onChange={e => setTimePeriod(e.target.value)}>
                          <option value="">Select</option>
                          <option value="Day">Day</option>
                          <option value="Night">Night</option>
                      </select>
                  </label>
              </div>
              <button type="submit" className='weather-btn'>Get Weather</button>
          </form>
          <WeatherDisplay
              error={error}
              weatherData={weatherData}
              location={location}
              date={date}
          />
      </div>
  );
}

export default App;
