import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

// export default function PlaylistForm() {
//   return (
//     <div>PlaylistForm</div>
//   )
// }

const PlaylistForm = ({ addSong }) => {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songName.trim() && artist.trim() && genre.trim()) {
      const newSong = {
        id: Date.now(),
        name: songName,
        artist: artist,
        genre: genre
      };
      addSong(newSong);
      setSongName('');
      setArtist('');
      setGenre('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          placeholder="Enter song name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Enter artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Enter genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">Add Song</Button>
    </Form>
  );
};

export default PlaylistForm;