import React from 'react';
import './App.css';

export default function WeatherDisplay({ error, weatherData, location, date }) {

    return (
        <div className='weather-container'>
            <div className="weather-data">
                {weatherData == null || error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : (
                    <>
                        <h1>{location}:</h1>
                        <h3>{date} {weatherData.name}</h3>
                        <ul>
                            {weatherData.temperature }° {weatherData.temperatureUnit} -- {weatherData.shortForecast}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}
