import React, { useState } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import PlaylistForm from './PlaylistForm';
import CreatePlaylistForm from './CreatePlaylistForm';

export default function PlaylistCard({ name, songs, addSong }) {
  const [playlistSongs, setPlaylistSongs] = useState(songs);

  // const Playlist = ({name, songs }) => {
  //   return (
  //     <Card>
  //       <CardTitle className="mx-auto">{name}</CardTitle>
  //       <CardBody>
  //         <ul>
  //           {songs.map((song) => (
  //             <li key={song.id}>
  //               {song.name} by {song.artist} - Genre: {song.genre}
  //             </li>
  //           ))}
  //         </ul>
  //       </CardBody>
  //     </Card>
  //   );
  // };

  const handleDeleteSong = (songId) => {
    setPlaylistSongs((prevSongs) =>
      prevSongs.filter((song) => song.id !== songId)
    );
  };
  const handleAddSong = (newSong) => {
    setPlaylistSongs((prevSongs) => [...prevSongs, newSong]);
    addSong(newSong);
  };
  
  return (
    <div>
      <h2>{name}</h2>
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
      <PlaylistForm addSong={handleAddSong} />
    </div>
  );
}