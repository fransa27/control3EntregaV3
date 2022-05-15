import {  Container, Row, Col, Button, Popover, PopoverBody } from "react-bootstrap"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';
import VerNoticia from "../layout/VerNoticia";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
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
                                                <Popover id="popover-basic">
                                                    <PopoverBody>
                                                        <div>
                                                            <h6>{newsss.longDescription} </h6>
                                                        </div>
                                                    </PopoverBody>  
                                                    
                                                </Popover>
                                                )}>
                                                <Button variant="success">
                                                    Ver Noticia
                                                </Button>
                                            </OverlayTrigger>

                                            {/* <Button variant="danger" size="sm" onClick={()=>VerNoticia(newsss._id)}>Ver noticia</Button> */}
                                            <Col> <FontAwesomeIcon
                                                                                    
                                            onClick={() => {
                                                
                                                if(store.getState().includes(newsss) === true){
                                                    setEstrella(faStarHalfStroke)   
                                                    props.onDelete(newsss)
                                                }else{
                                                    setEstrella(faStar)
                                                    props.onAdd(newsss)
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