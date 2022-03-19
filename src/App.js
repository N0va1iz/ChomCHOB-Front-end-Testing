import React from 'react';
import './App.css';
import Footer from './components/footer.js';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Router>        
        <React.Fragment>
          <Navbar/>
        </React.Fragment>       
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
