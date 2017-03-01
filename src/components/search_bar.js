import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return <input onChange={this.onInputChange} />;
  }
}

export default SearchBar;
