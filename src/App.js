//import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './Components/styles.css';
import About from './Components/About';
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import ThirdPartyAPI from './Components/ThirdPartyAPI';
import Currency from './Components/Currency';




function App() {
  
  return (
    <Router>

    
    <div className="App">
    
      <Navbar />
      <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/Countries' element={<ThirdPartyAPI />}/>
      <Route path='/Currency' element={<Currency />}/>


      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
