import { Popover, PopoverBody } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import styled from "styled-components";

function VistaFavoritos (props){
        
    return(
        <div>
            <OverlayTrigger placement="bottom" trigger="click" overlay={(
                <ul>
                    {
                        props.newList.map((newListElement, index) => (
                            <div key={index}>
                                <Contenedor>
                                    <Popover id="popover-basic">
                                    
                                    <PopoverBody>
                                        <div>
                                            <h6>{newListElement.title} </h6>
                                        </div>
                                    </PopoverBody>  
                                
                                    </Popover>
                                </Contenedor>
                            </div>
                        ))
                    }
                </ul>

            )}>
            <Button variant="success" size="lg">
                Ver Noticias Favoritas
            </Button>
            </OverlayTrigger>
        </div>

    )

}
export default VistaFavoritos

const Contenedor = styled.div`
    width:500px;
    min-heigth:100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding:20px;
`;