import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search(){
    setState()= {this.props.onSearch};
  };

  handleTermChange (event){
    this.setState({term: event.target.value})
  }
  render(){
    <div class="SearchBar"
    onSearch={this.props.search}>
      <input placeholder="Enter A Song, Album, or Artist"
      onChange={this.handleTermChange}/>
      <a>SEARCH</a>
    </div>
  }
}

export default SearchBar;
