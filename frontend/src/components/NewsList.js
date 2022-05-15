import {  Container, Row, Col, Popover, PopoverBody } from "react-bootstrap"
import { useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import styled from "styled-components";
//import Popover from 'react-bootstrap/Popover'

function NewsList (props) {
    var store=props.lista
    const [estrella, setEstrella] = useState(faStarHalfStroke)
    store.subscribe(() => {
        
        console.log("STORE: ", store.getState())
    })
    const [mensaje, setMensaje]=useState("")
    

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
                                            <Col><p>{mensaje}</p></Col>

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
                                                    alert(`FAVORITO ELIMINADO: ${newsss.title}`)   
                                                    //props.onDelete(newsss)
                                                    props.onPrueba(newsss)
                                                    //setMensaje("Agrega esta noticia a favorito")
                                                    
                                                }else{
                                                    setEstrella(faStar)
                                                    alert(`NUEVO FAVORITO AGREGADO: ${newsss.title}`)
                                                    //props.onAdd(newsss)
                                                    props.onPrueba(newsss)
                                                    //setMensaje("noticia en favorito")

                                                }
                                                window.location.reload()
                                                
                                            
                                            }} 
                                            /* icon={(store.getState()).includes(newsss) === true ? faStar : faStarHalfStroke} */
                                            icon={faStar}
                                            
                                            
                                            /></Col>
                                            {/* <Col>   
                                                { ()=> {
                                                    if (newsss.favorite === "1") {
                                                        setMensaje("noticia en favorito")
                                                    }else{
                                                        setMensaje("Agrega esta noticia a favorito")
                                                    }
                                                }
                                            } <p>{mensaje}</p>
                                            </Col> */}
                                        <div>{mensaje}</div>
                                        <div>________________________________________________________________</div>
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


const Contenedor = styled.div`
    width:500px;
    min-heigth:100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding:20px;
`;
const Button = styled.button`
  background-color: pink;
  border: 2px solid pink;
  border-radius: 5px;
  color: black;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
`;