import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props){
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
  }
  addTrack(){
    this.props.track = this.props.onAdd;
  };
  removeTrack(){
    this.props.track = this.props.onRemove;
  }

  render(){
    <div className="Track"
        track={this.props.track}>
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action"
    >
    renderAction(isRemoval) {
      if(isRemoval === true){
        return '-'
      } if(isRemoval === false){
        return '+'
      };
    };
    <!-- <a className='+'
    onClick={this.addTrack}></a> or
     <a className='-'
    onClick={this.removeTrack}></a> will go here --></a>
</div>
  }
}

export default Track;
