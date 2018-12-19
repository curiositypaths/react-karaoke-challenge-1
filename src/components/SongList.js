import React from "react";
import Song from "../components/Song";

const SongList = ({ songs, setPlayingSong }) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {songs.map(s => (
          <Song key={s.id} data={s} setPlayingSong={setPlayingSong} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
