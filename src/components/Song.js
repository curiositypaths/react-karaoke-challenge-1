import React from "react";

const Song = ({ data: { id, title, singer }, setPlayingSong }) => {
  return (
    <tr className="song">
      <td>{title}</td>
      <td>{singer}</td>
      <td>
        <button onClick={() => setPlayingSong(id)}>Play</button>
      </td>
    </tr>
  );
};

export default Song;
