import React from 'react';
import Carousel from '../Carousel/Carousel';
import slideImgs from '../../data/slideImgs';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel imgs={slideImgs} duration={500} />
    </div>
  );
}

export default App;
