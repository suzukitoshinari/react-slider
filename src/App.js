import React from 'react';
import './App.css';
import Slider from './components/Slider';
import Slider__image from './components/Slider__image';


function App() {
  return (
    <div className="App">
      <Slider slides={Slider__image} />
    </div>
  );
}

export default App;
