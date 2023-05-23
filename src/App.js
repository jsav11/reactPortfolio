import logo from './logo.svg';
import './App.css';
import './components/Header';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle } from 'reactstrap';
import { useState } from 'react';
import Playlist from './components/Playlist';
import PlaylistForm from './components/PlaylistForm';
import CreatePlaylistForm from './components/CreatePlaylistForm';
import SongLibrary from './components/SongLibrary';




//const message = 'This is my portfolio project!'  

// const Header = () => {
//   return <div className='App-header'>Cyber Playlist App</div>;
// }; //return <div>{message}</div>;

export default function App() {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = (playlistName) => {
    const newPlaylist = {
      id: Date.now(),
      name: playlistName,
      songs: []
    };
  
    setPlaylists([...playlists, newPlaylist]);
  };

  return (
    <>
      <TopBar />
      <Container>
        <Card>
          <CardTitle className='mx-auto'>Create A Playlist!</CardTitle>
        <CreatePlaylistForm createPlaylist={createPlaylist} />
          <hr />
          <CardBody>
            {playlists.map((playlist) => (
              <Playlist key={playlist.id} playlist={playlist} />
            ))}
          </CardBody>
          <Card>
            <CardBody>
              <PlaylistForm />
            </CardBody>
          </Card>
        </Card>
        <Card>
          <CardBody>Song Library Later</CardBody>
        </Card>
      </Container>
    </>
  );

}





