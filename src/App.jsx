import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from "./Components/Header"
import Routes from './Routes'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      
    </div>
  );
}

export default App;

