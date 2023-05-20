import React, { useState } from 'react';

export default function Playlist() {
const [playlistSongs, setPlaylistSongs] = useState([
   {id: 0, name: 'Thriller', artist: 'Michael Jackson', genre: 'Pop'},
   {id: 1, name: 'Purple Haze', artist: 'Jimi Hendrix', genre: 'Rock'},
   {id: 2, name: 'Send Love Through', artist: 'Debbie Harry', genre: 'Rock'},
   {id: 3, name: '<demons>', artist: 'Kim Petras', genre: 'EDM'},
   {id: 4, name: 'Church Outfit', artist: 'Poppy', genre: 'Industrial'}
]);

const handleDeleteSong = (songId) => {
  setPlaylistSongs((prevSongs) =>
    prevSongs.filter((song) => song.id !== songId)
  );
}

  return (
    <div>
      <h2>My Playlist</h2>
      <ul>
        {playlistSongs.map((song) => (
          <li key={song.id}>{song.name} by {song.artist} - Genre: {song.genre}
          <button onClick={() => handleDeleteSong(song.id)}
          style={{ borderRadius: '5px', margin: '5px', backgroundColor: 'red'}}
          >
           X</button>
          </li>
       ))}
      </ul>
    </div>
  );
}


