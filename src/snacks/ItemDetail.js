import {useParams} from "react-router-dom";
import {assortment} from "./AssortmentService";
import {Col, Image, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import AddToCart from "./AddToCart";
import placeholder from "../common/300x300.svg";

export default function ItemDetail({cart, setCart}) {
    let [img, setImg] = useState();
    let params = useParams();
    let item = assortment[params.category][params.item];

    useEffect(() => { document.title = item.title; })

    const fetchImage = async () => {
        const res = await fetch(item.image);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <Row>
            <Col key="item">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <AddToCart cart={cart} setCart={setCart} item={item} />
            </Col>
            <Col key="image" lg="auto">
                <Image src={typeof img === 'undefined' ? placeholder : img} fluid/>
            </Col>
        </Row>
    );
}
