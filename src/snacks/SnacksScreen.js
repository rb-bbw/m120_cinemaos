import {Card, Col, Row} from "react-bootstrap";

export default function SnacksScreen() {
    const snacks = ["chips", "sushi", "nachos", "popcorn", "foo", "bar", "whatever"];
    const drinks = ["beer", "cola",  "foo", "bar", "whatever"]
    return (
        <>
            <Row className="horizontal-scrollable" >
                {
                    snacks.map(snack =>
                        <Col lg={3}>
                            <Card>
                                <Card.Img src={"https://picsum.photos/300"}/>
                                <Card.Text>{snack}</Card.Text>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Row className="horizontal-scrollable" >
                {
                    drinks.map(drink =>
                        <Col lg={3}>
                            <Card>
                                <Card.Img src={"https://picsum.photos/300"}/>
                                <Card.Text>{drink}</Card.Text>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </>
    );
}
