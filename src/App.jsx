import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from "./Components/Header"
import Routes from './Routes'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;

