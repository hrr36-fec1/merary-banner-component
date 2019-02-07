import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerData:[]
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
          bannerData:results
        });
        console.log(results)
      },
      error: () => console.log('Error in getBannerData')
    });

  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default App;