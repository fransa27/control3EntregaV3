import VerTodasNoticias from './layout/VerTodasNoticias';
import FavouriteList from './layout/VerFavoritos';
import './App.css';
import {  Container } from 'react-bootstrap';
//import styled from "styled-components";
import { Navbar } from 'react-bootstrap';
export default function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <h1>Noticias Peritas Digitales</h1>
        <FavouriteList></FavouriteList>
        <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      </Navbar>
      <Container>
        <VerTodasNoticias></VerTodasNoticias>
        
      </Container>
      

    </div>
  );
}

/* const Navbar = styled.navbar`
    size=lg;
    background-color: lightblue;  
    border-radius: 5px;
    color: black;
    padding: 10px;

`; */

