import React from 'react';
import App from './App.jsx';

var Title = (props) => (
  <div className="mer_title">
  <div><span className="mer_movie-title">{props.info.title} </span><span className="mer_movie-year">{props.info.year}</span></div>
  </div>
)

export default Title;