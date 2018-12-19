import React from "react";
import Lyrics from "./Lyrics";

const KaraokeDisplay = ({ playingSong }) => {
  var lyrics, title;
  if (playingSong) {
    var { lyrics, title } = playingSong;
  }
  return (
    <div className="karaoke-display">
      <h2>{title}</h2>
      <Lyrics lyrics={lyrics ? lyrics : ""} />
    </div>
  );
};

export default KaraokeDisplay;
