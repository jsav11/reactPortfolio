import React, { useState } from 'react';
import PlaylistForm from './PlaylistForm';

export default function Playlist() {
  const [playlistSongs, setPlaylistSongs] = useState([]);

  const Playlist = ({ playlist }) => {
    return (
      <div>
        <h2>{playlist.name}</h2>
        <ul>
          {playlist.songs.map((song) => (
            <li key={song.id}>{song.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleDeleteSong = (songId) => {
    setPlaylistSongs((prevSongs) =>
      prevSongs.filter((song) => song.id !== songId)
    );
  };
  const addSong = (newSong) => {
    setPlaylistSongs((prevSongs) => [...prevSongs, newSong]);
  };
  
  return (
    <div>
      <h2>My Playlist</h2>
      <ul>
        {playlistSongs.map((song) => (
          <li key={song.id}>
            {song.name} by {song.artist} - Genre: {song.genre}
            <button
              type='button'
              className='btn btn-danger btn-sm mx-2 mt-1'
              onClick={() => handleDeleteSong(song.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <PlaylistForm addSong={addSong} />
    </div>
  );
}