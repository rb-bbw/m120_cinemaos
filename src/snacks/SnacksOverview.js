import {Card, Col, Row} from "react-bootstrap";
import {assortment} from './SnacksService';
import './style.css'

export default function SnacksOverview() {
    const snacks = Object.entries(assortment.snacks);
    const drinks = Object.entries(assortment.drinks);
    return (
        <>
            <Row className="horizontal-scrollable" >
                {
                    snacks.map(([key, snack]) =>
                        <Col lg={3} key={key}>
                            <Card>
                                <Card.Img src={snack.image}/>
                                <Card.Title>{snack.title}</Card.Title>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Row className="horizontal-scrollable" >
                {
                    drinks.map(([key, drink]) =>
                        <Col lg={3} key={key}>
                            <Card>
                                <Card.Img src={drink.image}/>
                                <Card.Title>{drink.title}</Card.Title>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </>
    );
}
