import VerTodasNoticias from './layout/VerTodasNoticias';
import FavouriteList from './layout/VerFavoritos';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Container>
{/*       <Router>
        <Route path="/" render={() => <Home />} />
        <Route path="/favoritos" component={Favourite} />
      </Router> */}

        <Button>Ver noticias favoritas</Button>
        
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
