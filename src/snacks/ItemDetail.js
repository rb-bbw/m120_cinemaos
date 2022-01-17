import {useParams} from "react-router-dom";
import {assortment} from "./AssortmentService";
import {Button, Col, Image, Row} from "react-bootstrap";
import {useEffect} from "react";
import {formatPrice} from "../common/Helpers";

export default function ItemDetail({cart, setCart}) {
    let params = useParams();
    let item = assortment[params.category][params.item];

    useEffect(() => { document.title = item.title; })

    function buyOne() {
        setCart({
            balance: cart.balance - item.price,
            items: [...cart.items, item]
        });
    }
    function canBuy() {
        return cart.balance - item.price > 0;
    }

    return (
        <Row>
            <Col key="item">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button
                    onClick={buyOne}
                    variant="primary"
                    disabled={!canBuy()}>
                    Add to Cart {formatPrice(item.price)}
                </Button>
            </Col>
            <Col key="image" lg="auto">
                <Image src={item.image} fluid/>
            </Col>
        </Row>
    );
}
