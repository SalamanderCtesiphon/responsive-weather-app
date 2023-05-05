import hotBg from './assest/hot.jpg'
import coldBg from './assest/cold.jpg'
import Descriptions from './components/Descriptions';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
            <input type='text' name='city' placeholder='Enter City...' />
            <button>&deg;F</button>
          </div>
          <div className='section section_temperature'>
            <div className='icon'>
              <h3>London, GB</h3>
              <img src='https://openweathermap.org/img/wn/02d@2x.png' alt='weather icon' />
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h1>34&deg;C</h1>
            </div>
          </div>
          <Descriptions />
        </div>
      </div>
    </div>
  );
}

export default App;
