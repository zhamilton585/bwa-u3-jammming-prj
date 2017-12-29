import React from 'react';
import './Tracklist.css';
import Track from '..Track/Track';

class Tracklist extends React.Component{
  render(){

    <div className="TrackList"
    onAdd={this.props.onAdd}
    onRemove={this.props.onRemove}
    >
    <!-- You will add a map method that renders a set of Track components  -->
      this.props.tracks.map(key={track.id}=>{
        return <Track track= track/>
      })
    </div>
  }
}

export default Tracklist;
