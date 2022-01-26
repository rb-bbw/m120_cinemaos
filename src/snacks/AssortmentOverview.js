import {Col, Row} from "react-bootstrap";
import {assortment} from './AssortmentService';
import './assortment.css'
import AssortmentItem from "./AssortmentItem";

export default function AssortmentOverview({cart, setCart}) {
    return (
        <>
            {Object.entries(assortment).map(([categoryKey, category]) =>
                <Row lg={5} className="horizontal-scrollable" key={categoryKey}>
                    {Object.entries(category).map(([itemKey, item]) =>
                        <Col key={itemKey}>
                            <AssortmentItem {...{cart, setCart, item, itemKey, categoryKey}}/>
                        </Col>
                    )}
                </Row>
            )}
        </>
    );
}
