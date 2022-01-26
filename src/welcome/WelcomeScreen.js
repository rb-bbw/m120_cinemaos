import {Col, Row} from 'react-bootstrap';
import WelcomeIcon from './WelcomeIcon';
import {Link} from 'react-router-dom';

export default function WelcomeScreen() {
    return (
        <Row>
            <Col>
                <Link to="/lavatory">
                    <WelcomeIcon src="https://picsum.photos/seed/11/300?grayscale" text="I need to π"/>
                </Link>
            </Col>
            <Col>
                <Link to="/assortment">
                    <WelcomeIcon src="https://picsum.photos/seed/00/300?grayscale" text="I wanna eat"/>
                </Link>
            </Col>
        </Row>
    );
}
