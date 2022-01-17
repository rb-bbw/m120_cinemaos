import {Button, Card, Col, Row} from "react-bootstrap";
import {assortment} from './AssortmentService';
import './style.css'
import AddToCart from "./AddToCart";

// TODO placeholder image with loading animation
export default function AssortmentOverview({cart, setCart}) {
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
                                    className="stretched-link"
                                    size="sm">
                                    Details
                                </Button>
                                <AddToCart cart={cart} setCart={setCart} item={item} size="sm" />
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        )}
    </>);
}
