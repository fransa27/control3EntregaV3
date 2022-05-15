import {  Container, Row, Col, Button, Popover, PopoverBody } from "react-bootstrap"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';
import VerNoticia from "../layout/VerNoticia";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import styled from "styled-components";
//import Popover from 'react-bootstrap/Popover'

function NewsList (props) {
    var store=props.lista
    var favorito=true
    const [Estado, cambiarEstado] = useState(false);
    const [estrella, setEstrella] = useState(faStarHalfStroke)
    store.subscribe(() => {
        
        console.log("STORE: ", store.getState())
    })

    

    return (
        <section id='newsList'>
            <Container>
                <Row>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                                                
                                props.newssss.map((newsss, index) => (
                                    <div key={index} className='row'>
                                        <Row>
                                        <Row>
                                            <p></p>
                                            <p></p>
                                        <Row>
                                            <Col><h3>{newsss.title}</h3></Col>
                                            <Col><h6>{newsss.shortDescription}</h6></Col>
                                            

                                            <OverlayTrigger
                                                placement="bottom"
                                                trigger="click"
                                                overlay={(
                                                    <Contenedor>
                                                        <Popover id="popover-basic">
                                                        <PopoverBody>
                                                            <div>
                                                                <h6>{newsss.longDescription} </h6>
                                                            </div>
                                                        </PopoverBody>  
                                                    
                                                        </Popover>
                                                    </Contenedor>
                                                
                                                )}>
                                                <Button variant="success">
                                                    Ver Noticia
                                                </Button>
                                            </OverlayTrigger>

                                            {/* <Button variant="danger" size="sm" onClick={()=>VerNoticia(newsss._id)}>Ver noticia</Button> */}
                                            <Col> <FontAwesomeIcon
                                                                                    
                                            onClick={() => {
                                                
                                                if(newsss.favorite === "1"){
                                                    setEstrella(faStarHalfStroke)   
                                                    //props.onDelete(newsss)
                                                    props.onPrueba(newsss)
                                                }else{
                                                    setEstrella(faStar)
                                                    //props.onAdd(newsss)
                                                    props.onPrueba(newsss)

                                                }
                                                //store.getState().includes(newsss) === true ? setEstrella(faStar) : setEstrella(faStarHalfStroke)
                                                //store.getState().includes(newsss) === true ? props.onDelete(newsss) : props.onAdd(newsss)
                                                //props.onAdd(newsss)


                                            }} 
                                            icon={(store.getState()).includes(newsss) === true ? faStar : faStarHalfStroke}
                                            //icon={faStarHalfStroke}
                                            
                                            
                                            /></Col>

                                        </Row>
                                        </Row>
                                        </Row>
                                    
                                    </div>
                                    
                                    
                                ))
                            }
                        </ul>
                        
                    </div>
                
                </Row>
                
            </Container>
        </section>
    )
}

export default NewsList


const Overlay = styled.div`
    width:100vw;
    heigth:100vh;
    position:fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    alingn-items: center;
    justify-content:center;

`;
const Contenedor = styled.div`
    width:500px;
    min-heigth:100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding:20px;
`;