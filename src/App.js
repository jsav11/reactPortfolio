import logo from './logo.svg';
import './App.css';
import './components/Header';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';
import Playlist from './components/Playlist';
import { Container } from 'reactstrap';



//const message = 'This is my portfolio project!'  

// const Header = () => {
//   return <div className='App-header'>Cyber Playlist App</div>;
// }; //return <div>{message}</div>;

export default function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<Playlist />} />

        </Routes>
      </Container>
    </>
  )

}





