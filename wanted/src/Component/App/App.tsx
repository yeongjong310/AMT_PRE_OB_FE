import React from 'react';
import Carousel from '../Carousel/Carousel';
import slideImgs from '../../data/slideImgs';

function App() {
  return (
    <div className="App">
      <Carousel imgs={slideImgs} duration={500} />
    </div>
  );
}

export default App;
