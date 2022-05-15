import VerTodasNoticias from './layout/VerTodasNoticias';
import FavouriteList from './layout/VerFavoritos';
import './App.css';
import {  Container } from 'react-bootstrap';

export default function App() {
  return (
    <div className="App">
      <Container>

        <FavouriteList></FavouriteList>
        
        <VerTodasNoticias></VerTodasNoticias>
        
      </Container>
      

    </div>
  );
}

/* function Home() {
  return (
    <div>
      <VerTodasNoticias />
    </div>
  );
}

function Favourite() {
  return (
    <div>
      <FavouriteList />
    </div>
  );
} */
