import logo from './logo.svg';
import './App.css';
import './components/Header';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';
import Playlist from './components/Playlist';
import { Container, Card, CardBody, CardTitle } from 'reactstrap';
import { useState } from 'react';



//const message = 'This is my portfolio project!'  

// const Header = () => {
//   return <div className='App-header'>Cyber Playlist App</div>;
// }; //return <div>{message}</div>;

export default function App() {
  // const [playlistSongs, setPlaylistSongs]= useState([
  //   {id: 0,
  //   name: 'Thriller'
  //   }
  // ])

  return (
    <>
    
      <TopBar />
      <Container>
        <Card>
          <CardTitle className='mx-auto'>
          Create A Playlist!
          </CardTitle>
          <hr/>
          <CardBody>
          <Playlist/>
          </CardBody>

        </Card>
{/*         
        <Routes>
          <Route path="/" element={<Playlist />} />
        
        </Routes> */}
      </Container>
    </>
  );

}





