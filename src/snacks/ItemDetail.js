import {useParams} from "react-router-dom";
import {assortment} from "./AssortmentService";
import {Col, Image, Row} from "react-bootstrap";
import {useEffect} from "react";
import AddToCart from "./AddToCart";

export default function ItemDetail({cart, setCart}) {
    let params = useParams();
    let item = assortment[params.category][params.item];

    useEffect(() => { document.title = item.title; })

    return (
        <Row>
            <Col key="item">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <AddToCart cart={cart} setCart={setCart} item={item} />
            </Col>
            <Col key="image" lg="auto">
                <Image src={item.image} fluid/>
            </Col>
        </Row>
    );
}
