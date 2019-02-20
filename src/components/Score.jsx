import React from 'react';
import App from './App.jsx';

var Score = (props) => (
  <div className="score">
    <div className="separator"></div>
    <table>
     <tbody>
      <tr>
        <td className="score-left">
        <div className="score-title"></div>
        <a className="metascore" href="https://www.metacritic.com/movie/glass/critic-reviews">METASCORE </a>
        <a className="question" href="https://www.metacritic.com/about-metascores"><i className="fa fa-question-circle" aria-hidden="true"></i>
        </a>
        <div className="score_details1">
            <span className="score_description1">
                <a className="data1" href="https://www.metacritic.com/movie/jurassic-park/critic-reviews">
            Generally favorable reviews
            </a>
            </span>
        </div>
         <div className="score_details2">
            <span className="score_description2">
                <a className="data2" href="https://www.metacritic.com/movie/jurassic-park/critic-reviews">
            based on 20 Critics
            </a>
            </span>
        </div>
        <div className="see_all">
            <a className="see_all_details"href="https://www.metacritic.com/movie/jurassic-park/critic-reviews">See All</a>
        </div>
        </td>
        <td className="summary_right">
            <a className="metascore_anchor" href="https://www.metacritic.com/movie/jurassic-park/critic-reviews"><span className="green_score">{props.info.score}</span>
            </a>
        </td>
      </tr>
      </tbody>
    </table>
    <div className="bottom_separator"></div>
  </div>
)

export default Score;