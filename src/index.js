import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const YOUTUBE_API_KEY = 'AIzaSyB6XRA73s2pTMgaH8Rn4AxeEXvGjkzl5Tw';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
