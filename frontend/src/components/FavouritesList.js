import { Row, Col } from "react-bootstrap"

function VistaFavoritos (props){
        
    return(
        <div>
            <ul >
                {
                props.newList.map((newListElement) => (
                    <div className="row">
                        <Row>
                            <Col> <h2>{newListElement.title}</h2></Col>
                            <Col> <h4>{newListElement.shortDescription}</h4></Col>
                        </Row>
                    </div>
                ))
            
                }
            </ul>
        </div>
    )

}
export default VistaFavoritos