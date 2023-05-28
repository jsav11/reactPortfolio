import React, { useState } from 'react';
import { Card, CardTitle, CardBody, Container } from 'reactstrap';
import TopBar from './TopBar';

export default function SongLibrary() {
  const [playlistSongs] = useState([
    { id: 0, name: 'Thriller', artist: 'Michael Jackson', genre: 'Pop' },
    { id: 1, name: 'Purple Haze', artist: 'Jimi Hendrix', genre: 'Rock' },
    { id: 2, name: 'Send Love Through', artist: 'Debbie Harry', genre: 'Rock' },
    { id: 3, name: '<demons>', artist: 'Kim Petras', genre: 'EDM' },
    { id: 4, name: 'Church Outfit', artist: 'Poppy', genre: 'Industrial' }
  ]);

  return (
    <>
      <TopBar />
      <Container>
        <Card>
          <CardBody>
            <CardTitle>Song Library</CardTitle>
            <ul>
              {playlistSongs.map((song) => (
                <li key={song.id}>
                  {song.name} by {song.artist} - Genre: {song.genre}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
