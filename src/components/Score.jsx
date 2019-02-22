import React from 'react';
import App from './App.jsx';

var Score = (props) => (
  <div className="mer_score">
    <div className="mer_separator"></div>
    <table>
     <tbody>
      <tr>
        <td className="mer_score-left">
        <div className="mer_score-title"></div>
        <a className="mer_metascore" href="https://www.metacritic.com/movie/glass/critic-reviews">METASCORE </a>
        <a className="mer_question" href="https://www.metacritic.com/about-metascores"><i className="fa fa-question-circle" aria-hidden="true"></i>
        </a>
        <div className="mer_score_details1">
            <span className="mer_score_description1">
                <a className="mer_data1" href="https://www.metacritic.com/movie/jurassic-park/critic-reviews">
            Generally favorable reviews
            </a>
            </span>
        </div>
         <div className="mer_score_details2">
            <span className="mer_score_description2">
                <a className="mer_data2" href="https://www.metacritic.com/movie/jurassic-park/critic-reviews">
            based on 20 Critics
            </a>
            </span>
        </div>
        <div className="mer_see_all">
            <a className="mer_see_all_details"href="https://www.metacritic.com/movie/jurassic-park/critic-reviews">See All</a>
        </div>
        </td>
        <td className="mer_summary_right">
            <a className="mer_metascore_anchor" href="https://www.metacritic.com/movie/jurassic-park/critic-reviews"><span className="mer_green_score">{props.info.score}</span>
            </a>
        </td>
      </tr>
      </tbody>
    </table>
    <div className="mer_bottom_separator"></div>
  </div>
)

export default Score;