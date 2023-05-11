import hotBg from './assest/hot.jpg'
import coldBg from './assest/cold.jpg'
import Descriptions from './components/Descriptions';
import { getFormattedWeatherData } from './weatherService';
import { useEffect, useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNAT-NufAZWQKevwSBpbLo1HLWdzYm-0w",
  authDomain: "weather-app-f672a.firebaseapp.com",
  projectId: "weather-app-f672a",
  storageBucket: "weather-app-f672a.appspot.com",
  messagingSenderId: "268943571591",
  appId: "1:268943571591:web:0be58ed5a121e8630e9622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [city, setCity] = useState("Paris")
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState("imperial")
  const [bg, setBg] = useState(hotBg)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units)
      setWeather(data)

      const threshold = units === 'metric' ? 20 : 60
      if(data.temp <= threshold) setBg(coldBg)
      else setBg(hotBg)
    }

    fetchWeatherData()
    
  }, [units, city])


  const handleUnitsClick = (e) => {
    const button = e.currentTarget
    const currentUnit = button.innerText.slice()

    const isFahrenheit = currentUnit === 'F'
    
    button.innerText = isFahrenheit ? "C" : "F"
    setUnits(isFahrenheit ? "imperial" : "metric")
  }

  const enterKeyPressed = (e) => {
    if(e.keyCode === 13) {
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <div className='overlay'>
        {weather && (
          <div className='container'>
          <div className='section section_inputs'>
            <input onKeyDown={enterKeyPressed} type='text' name='city' placeholder='Enter City...' />
            <button onClick={(e) => handleUnitsClick(e)}>&deg;C</button>
          </div>
          <div className='section section_temperature'>
            <div className='icon'>
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt='weather icon' />
              <h3>{weather.description}</h3>
            </div>
            <div className='temperature'>
              <h1>{`${weather.temp.toFixed()}`}&deg;{`${
                units === "metric" ? "C" : "F"
              }`}</h1>
            </div>
          </div>
          <Descriptions weather={weather} units={units} />
        </div>
        )}        
      </div>
    </div>
  );
}

export default App;
