import {Button, ButtonGroup, Card, Col, Row} from "react-bootstrap";
import {assortment} from './AssortmentService';
import './style.css'

export default function AssortmentOverview() {
    return (<>
        {Object.entries(assortment).map(([categoryKey, category]) =>
            <Row lg={5} className="horizontal-scrollable" key={categoryKey}>
                {Object.entries(category).map(([itemKey, item]) =>
                    <Col key={itemKey}>
                        <Card>
                            <Card.Img src={item.image} alt={`Image of ${item.title}`}/>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>{item.description}</p>
                                <Button
                                    href={`assortment/${categoryKey}/${itemKey}`}
                                    variant="primary"
                                    className="stretched-link">
                                    Details
                                </Button>
                                <Button
                                    onClick={() => console.log("add to cart")}
                                    variant="primary">
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        )}
    </>);
}
