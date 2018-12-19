import React, { Component } from "react";
import Filter from "../components/Filter";
import SongList from "../components/SongList";
import KaraokeDisplay from "../components/KaraokeDisplay";
import songs from "../data/songs";

const apiAddress = `http://localhost:4000/users/1/songs`;

class KaraokeContainer extends Component {
  state = {
    songs: [],
    playingSongId: null,
    searchTerm: ""
  };

  setPlayingSong = playingSongId => this.setState({ playingSongId });

  componentDidMount() {
    fetch(apiAddress)
      .then(r => r.json())
      .then(songs => this.setState({ songs }));
  }

  playingSong = () =>
    this.state.songs.find(s => s.id === this.state.playingSongId);

  updateSearchTerm = ({ target: { value: searchTerm } }) =>
    this.setState({ searchTerm });

  songsToDisplay = () =>
    this.state.songs.filter(s => s.title.includes(this.state.searchTerm));

  render() {
    const {
      state: { songs },
      setPlayingSong,
      playingSong,
      updateSearchTerm
    } = this;

    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter updateSearchTerm={updateSearchTerm} />
          <SongList
            songs={this.songsToDisplay()}
            setPlayingSong={setPlayingSong}
          />
        </div>
        <KaraokeDisplay playingSong={playingSong()} />
      </div>
    );
  }
}

export default KaraokeContainer;
