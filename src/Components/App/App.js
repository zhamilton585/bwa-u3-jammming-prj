import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Spotify.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state.searchResults = [
      name: ' ',
      artist: ' ',
      album: ' '
    ];
    playlistName: 'New Playlist';
    playlistTracks: [
      {name, artist, album},
       {name, artist, album},
       {name, artist, album}
     ];
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  };

    addTrack (track) {
      if(track.id() ==! this.state.playlistTracks){
        return this.state.playlistTracks + track.id;
      } else {
        return this.state.playlistTracks;
      }
    }

  removeTrack(track){
    if(track.id === this.state.playlistTracks){
      return this.state.playlistTracks - track.id;
    }
  };

  updatePlaylistName(name){
    setState(playlistName) = <input>
  };

  Sotify.savePlaylist(){
    trackURIs = [uri, uri, uri]
  };

  Spotify.search(name, artist, album){
    console.log()
  }

  render() {
    return (
    <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <!-- Add a SearchBar component --><div className="SearchBar"></div>
          <div className="App-playlist"
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            >
          <!-- Add a SearchResults component --><div className= "Search Results"></div>
            <div className= "Playlist"
              onAdd={this.addTrack}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              >
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
