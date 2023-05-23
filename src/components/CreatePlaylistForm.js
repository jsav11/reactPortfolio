import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';


const CreatePlaylistForm = ({ createPlaylist }) => {
    const [playlistName, setPlaylistName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (playlistName.trim()) {
        createPlaylist(playlistName);
        setPlaylistName('');
      }
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Enter playlist name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Create Playlist</Button>
      </Form>
    );
  };
  
  export default CreatePlaylistForm;