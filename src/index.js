import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyB6XRA73s2pTMgaH8Rn4AxeEXvGjkzl5Tw';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    this.searchVideosByTerm('surfboards');
  }

  searchVideosByTerm(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, videos => this.setState({videos}))
  }

  render() {
    // var videoList = '';
    // this.state.videos.forEach(video => {
    //   videoList += <li>{video.snippet.title}</li>;
    // });
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
