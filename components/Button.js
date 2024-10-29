// src/ButtonLink.js
import '../App.css';
import React from 'react';

const ButtonLink = ({ url, text }) => {
  return (
    <a href={url} className="button-link">
      {text}
    </a>
  );
};

export default ButtonLink;
