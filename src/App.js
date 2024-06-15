import React from 'react';
import './App.css';
import StepsBarChart from './components/StepsBarChart';
import StudyLineChart from './components/StudyLineChart';
import SleepAreaChart from "./components/SleepAreaChart";
import CombinedChart from "./components/CombinedChart";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>My Weekly Charts</h1>
              <h3>Daily Steps</h3>
              <div className="chart-container">
                  <StepsBarChart/>
              </div>
              <h3>Daily Study Hours</h3>
              <div className="chart-container">
                  <StudyLineChart/>
              </div>
              <h3>Daily Sleeping Hours</h3>
              <div className="chart-container">
                  <SleepAreaChart/>
              </div>
              <h3>Weekly Summary</h3>
              <div className="chart-container">
                  <CombinedChart/>
              </div>
              <p>-> steps = x1000</p>
          </header>

      </div>
  );
}

export default App;
