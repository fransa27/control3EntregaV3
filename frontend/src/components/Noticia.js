import { Row, Col } from "react-bootstrap"

function Noticia (props){
        
    return(
        <div>
            <ul >
                {
                props.newList.map((newListElement) => (
                    <div className="row">
                        <Row>
                            <Col> <h2>{newListElement.title}</h2></Col>
                            <Col> <h5>{newListElement.date}</h5></Col>
                            <Col> <h4>{newListElement.longDescription}</h4></Col>
                        </Row>
                    </div>
                ))
            
                }
            </ul>
        </div>
    )

}
export default Noticia