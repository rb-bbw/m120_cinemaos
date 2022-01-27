import {Button, Card} from "react-bootstrap";
import AddToCart from "./AddToCart";
import placeholder from "../common/300x300.svg";
import {useEffect, useState} from "react";

export default function AssortmentItem({cart, setCart, item, categoryKey, itemKey}) {
    let [img, setImg] = useState();

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
        <Card>
            <Card.Img src={typeof img === 'undefined' ? placeholder : img} alt={`Image of ${item.title}`}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <p>{item.description}</p>
                <div className="d-flex justify-content-between mt-2">
                    <Button
                        href={`assortment/${categoryKey}/${itemKey}`}
                        variant="primary"
                        className="stretched-link"
                        size="sm">
                        Details
                    </Button>
                    <AddToCart cart={cart} setCart={setCart} item={item} size="sm" />
                </div>
            </Card.Body>
        </Card>
    );
}
