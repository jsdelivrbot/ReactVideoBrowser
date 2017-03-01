import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.handleOnInputChange = event => this.onInputChange(event);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div>
        <input onChange={this.handleOnInputChange} />
      </div>
    );
  }
}

export default SearchBar;
