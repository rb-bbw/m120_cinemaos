import {Card, Col, Row} from "react-bootstrap";
import {assortment} from './SnacksService';
import './style.css'

export default function SnacksOverview() {
    const snacks = Object.entries(assortment.snacks);
    const drinks = Object.entries(assortment.drinks);
    return (
        <>
            {
                Object.entries(assortment).map(([key, category]) =>
                    <Row className="horizontal-scrollable" key={key}>
                        {
                            Object.entries(category).map(([key, item]) =>
                                <Col lg={3} key={key}>
                                    <Card>
                                        <Card.Img src={item.image}/>
                                        <Card.Title>{item.title}</Card.Title>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                )
            }
        </>
    );
}
