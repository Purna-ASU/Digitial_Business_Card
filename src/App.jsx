import React from 'react';
import './App.css';
import Interests from './components/Interests';
import Info from './components/Info';
import About from './components/About';

function App() {
  return (
    <div className='container'>
      <Info />
      <About />
      <Interests />
    </div>
  );
}

export default App;
