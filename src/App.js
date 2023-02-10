import Weather from './components/Weather';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         Weather App
         <Weather />
      </BrowserRouter>
    </div>
  );
}

export default App;
