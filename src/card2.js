// Card2.js
import React from 'react';
import './card2.css';

const Card2 = () => {
  return (
    <div className="card2">
      <div className="content">
        <div className="image-placeholder"></div>
        <div>
          <h4>Part one</h4>
          <h2>Headline</h2>
          <p>Please add your content here. Keep it short and simple. And smile :)</p>
        </div>
      </div>
      <div className="tags">
        <div className="tag">Tag 1</div>
        <div className="tag">Tag 2</div>
        <div className="tag">Tag 3</div>
        <div className="tag">Tag 4</div>
        <div className="tag">Tag 5</div>
        <div className="tag">Tag 6</div>
        <div className="tag">Tag 7</div>
      </div>
    </div>
  );
};

export default Card2;
