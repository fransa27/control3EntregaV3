import {  Container, Row, Col, Button, Popover, PopoverBody } from "react-bootstrap"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import styled from "styled-components";

function VistaFavoritos (props){
        
    return(
        <div>
            <ul >
                {
                props.newList.map((newListElement, index) => (
                    <div key={index}>
                        <OverlayTrigger
                            placement="bottom"
                            trigger="click"
                            overlay={(
                                <Contenedor>
                                    <Popover id="popover-basic">
                                    <PopoverBody>
                                        <div>
                                            <h6>{newListElement.title} </h6>
                                        </div>
                                    </PopoverBody>  
                                
                                    </Popover>
                                </Contenedor>
                            
                            )}>
                            <Button variant="success">
                                Ver Favouritos
                            </Button>
                        </OverlayTrigger>
                    </div>
                ))
            
                }
            </ul>
        </div>
    )

}
export default VistaFavoritos


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