import React from 'react';
import $ from 'jquery';
import VideoPlayer from './VideoPlayer.jsx';
import Nav from './Nav.jsx';
import Title from './Title.jsx';
import Score from './Score.jsx';
import Vote from './Vote.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerData:[],
    }

   this.getBannerData = this.getBannerData.bind(this);
  }

  componentDidMount(){
    this.getBannerData();
  }

  getBannerData() {
    var that = this;
    $.ajax({
      url: 'http://localhost:8080/api/movies/banner',
      method: 'GET',
      success: function(results) {
        that.setState({
          bannerData:results[1]
        });
        console.log(results)
      },
      error: () => console.log('Error in getBannerData')
    });

  }

  render() {
    return (
      <div>
      <Nav/>
       <div className="banner">
          <div className="banner-header"></div>
              <Title info={this.state.bannerData}/>
              <VideoPlayer video={this.state.bannerData}/>
              <Score info={this.state.bannerData}/>
              <Vote info={this.state.bannerData}/>
        </div>
      </div>
    );
  }
}

export default App;