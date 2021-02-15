import React from "react";

import "./PlayList.css";

import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList tracks={this.props.playlistTracks} />
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
