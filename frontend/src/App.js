import InfoPanel from './layout/layout';
import a from './layout/layout';
import './App.css';
import {Button, Row, Col, Container} from "react-bootstrap"
import React, {useState} from 'react';
import styled from 'styled-components';
import CompleteNew from './components/CompleteNews';


function App (props)  {

  

  const [Estado, cambiarEstado] = useState(false);
  

  return(
    <div className='App'>
      
      
      <Button onClick={() => cambiarEstado(true)}>Seleccionar</Button>

      <CompleteNew
        estado = {Estado}
        cambiarEstado={cambiarEstado}
      >
        <a/>
        <h1>dasdasf</h1>
        <p> aaaaaaa</p>
        
        

        
      </CompleteNew>
      
    </div>
  )
}

export default App


/*
/*
        <section id='CompleteNew'>
          <Container>
            <Row>
              <ul className="arrow.styled">
                {
                  props.News.map((News, index) => (
                    <div key={index} className='row'>
                      <Row>
                      <Col><h3>{News.title}</h3></Col>
                      <Col><h1>{News.date}</h1></Col>
                      <Col><h2>{News.longDescription}</h2></Col>
                      </Row>
                    </div>
                  ))
                }
              </ul>
            </Row>
          </Container>
        </section>
        */