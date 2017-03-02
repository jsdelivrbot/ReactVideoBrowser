import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const YOUTUBE_API_KEY = 'AIzaSyB6XRA73s2pTMgaH8Rn4AxeEXvGjkzl5Tw';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchVideosByTerm('formula one 2017');
  }

  searchVideosByTerm(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, videos => {
      const selectedVideo = this.state.selectedVideo || videos[0]
      this.setState({ videos, selectedVideo })
    })
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
