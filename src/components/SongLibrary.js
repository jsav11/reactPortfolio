import React, { useState } from 'react';

export default function SongLibrary() {
  const [playlistSongs, setPlaylistSongs] = useState([
    { id: 0, name: 'Thriller', artist: 'Michael Jackson', genre: 'Pop' },
    { id: 1, name: 'Purple Haze', artist: 'Jimi Hendrix', genre: 'Rock' },
    { id: 2, name: 'Send Love Through', artist: 'Debbie Harry', genre: 'Rock' },
    { id: 3, name: '<demons>', artist: 'Kim Petras', genre: 'EDM' },
    { id: 4, name: 'Church Outfit', artist: 'Poppy', genre: 'Industrial' }
  ]);

  return (
    <SongLibrary />
  );
}