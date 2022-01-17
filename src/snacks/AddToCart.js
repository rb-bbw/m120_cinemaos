import {Button} from "react-bootstrap";
import {formatPrice} from "../common/Helpers";

export default function AddToCart({cart, setCart, item, size}) {
    size = size === undefined ? "lg" : size; // default large

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
        <Button
            onClick={buyOne}
            variant="primary"
            disabled={!canBuy()}
            size={size}>
            🛒 {formatPrice(item.price)}
        </Button>
    );
}
