import React from 'react';
import './SearchResults.css';
import Tracklist from '..Tracklist/Tracklist'

class SearchResults extends React.Component{
  searchResults = this.state.searchResults
  render(){
      <div className="SearchResults"
            tracks={this.state.searchResults}
            onAdd={this.props.onAdd}>
        <h2>Results</h2>
          TrackList(tracks= this.state.searchResults)
      </div>
  }
}


export default SearchResults;
