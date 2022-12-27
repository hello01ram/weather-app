import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="app">
        <header className="today-header">
          <div className="today-temp">
            <p className="text-4xl">Liverpool</p>
            <p className="text-9xl">24C</p>
            <p className="text-xl text-gray-600 ">Cloudy</p>
          </div>
          <div className="today-stats">
            <div><span>Humidity</span><span>10%</span></div>
            <div><span>Rain</span><span>32%</span></div>
            <div><span>Wind</span><span>10 mph</span></div>
          </div>
        </header>
        <ul className="hours-stats">
          <li>1pm <span>23C</span></li>
          <li>2pm <span>23C</span></li>
          <li>3pm <span>23C</span></li>
          <li>4pm <span>23C</span></li>
          <li>5pm <span>23C</span></li>
          <li>6pm <span>23C</span></li>
          <li>7pm <span>23C</span></li>
          <li>8pm <span>23C</span></li>
          <li>9pm <span>23C</span></li>
          <li>10pm <span>23C</span></li>
          <li>11pm <span>23C</span></li>
          <li>12pm <span>23C</span></li>
          <li>1am <span>23C</span></li>
          <li>2am <span>23C</span></li>
        </ul>
        <ul className="week-stats">
          <li>
            <span>Monday</span>
            <span>31C</span>
          </li>
          <li>
            <span>Tuesday</span>
            <span>31C</span>
          </li>
          <li>
            <span>Wedensday</span>
            <span>31C</span>
          </li>
          <li>
            <span>Thursday</span>
            <span>23C</span>
          </li>
          <li>
            <span>Friday</span>
            <span>23C</span>
          </li>
          <li>
            <span>Saturday</span>
            <span>31C</span>
          </li>
          <li>
            <span>Sunday</span>
            <span>31C</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
