// Card1.js
import React from 'react';
import './card.css';

const Card1 = () => {
  return (
    <div className="card1">
      <div className="image-placeholder"></div>
      <div className="content">
        <h2>Headline</h2>
        <h4>Subhead</h4>
        <p>Please add your content here. Keep it short and simple. And smile :)</p>
        <div className="tags">
          <h3>Title</h3>
          <div className="tag">Tag 1</div>
          <div className="tag">Tag 2</div>
          <div className="tag">Tag 3</div>
          <div className="tag">Tag 4</div>
        </div>
        <button>Button</button>
      </div>
    </div>
  );
};

export default Card1;
