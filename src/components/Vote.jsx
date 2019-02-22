import React from 'react';
import App from './App.jsx';

var Vote = (props) => (
  <div className="mer_vote">
    <div className="mer_vote_now">VOTE NOW</div>
    <div className="mer_voting_widget">
        <span className="mer_vote0">{props.info.vote0}</span>
        <span className="mer_vote1">{props.info.vote1}</span>
        <span className="mer_vote2">{props.info.vote2}</span>
        <span className="mer_vote3">{props.info.vote3}</span>
        <span className="mer_vote4">{props.info.vote4}</span>
        <span className="mer_vote5">{props.info.vote5}</span>
        <span className="mer_vote6">{props.info.vote6}</span>
        <span className="mer_vote7">{props.info.vote7}</span>
        <span className="mer_vote8">{props.info.vote8}</span>
        <span className="mer_vote9">{props.info.vote9}</span>
        <span className="mer_vote10">{props.info.vote10}</span>
    </div>
  </div>
)

export default Vote;