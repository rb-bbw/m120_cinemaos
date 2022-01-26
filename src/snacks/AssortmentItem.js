import {Button, Card} from "react-bootstrap";
import AddToCart from "./AddToCart";

export default function AssortmentItem({cart, setCart, item, categoryKey, itemKey}) {
    return (
        <Card>
            <Card.Img src={item.image} alt={`Image of ${item.title}`}/>
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
