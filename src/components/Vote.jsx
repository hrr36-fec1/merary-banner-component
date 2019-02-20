import React from 'react';
import App from './App.jsx';

var Vote = (props) => (
  <div className="vote">
    <div className="vote_now">VOTE NOW</div>
    <div className="voting_widget">
        <span className="vote0">{props.info.vote0}</span>
        <span className="vote1">{props.info.vote1}</span>
        <span className="vote2">{props.info.vote2}</span>
        <span className="vote3">{props.info.vote3}</span>
        <span className="vote4">{props.info.vote4}</span>
        <span className="vote5">{props.info.vote5}</span>
        <span className="vote6">{props.info.vote6}</span>
        <span className="vote7">{props.info.vote7}</span>
        <span className="vote8">{props.info.vote8}</span>
        <span className="vote9">{props.info.vote9}</span>
        <span className="vote10">{props.info.vote10}</span>
    </div>
  </div>
)

export default Vote;