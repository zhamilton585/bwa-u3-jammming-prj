import React from 'react';
import './Playlist.css';
import Tracklist from'..Tracklist/Tracklist';

class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
  }
  handleNameChange(){
    onNameChange() = 'New Playlist';
  }

  render(){
    <div className="Playlist"
    tracks={this.props.playlistTracks}
    onChange={this.handleNameChange}>
      <input defaultValue={'New Playlist'}/>
        <div className= "Tracklist"
        onAdd={this.props.addTrack}
        onRemove={this.props.removeTrack}></div>
        <a className="Playlist-save"
        onSave={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
  }
}

export default Playlist;
