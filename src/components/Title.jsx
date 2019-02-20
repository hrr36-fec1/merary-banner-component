import React from 'react';
import App from './App.jsx';

var Title = (props) => (
  <div className="title">
  <div><span className="movie-title">{props.info.title} </span><span className="movie-year">{props.info.year}</span></div>
  </div>
)

export default Title;