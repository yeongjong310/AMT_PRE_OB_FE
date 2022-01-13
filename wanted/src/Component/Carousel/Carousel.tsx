import React, { ReactElement } from 'react';
import slideImgs from './slideImgs';

export default function Carousel(): ReactElement {
  return (
    <div>
      <ul>
        <li>
          {slideImgs.map(({ src }) => (
            <img src={src} alt="" />
          ))}
        </li>
      </ul>
    </div>
  );
}
