import React from 'react';
import {Toast, ToastContainer} from "react-bootstrap";
import {formatPrice} from "./Helpers";

// https://react-bootstrap.github.io/components/toasts/#placement
export default function Notifications({cart, setCart}) {
    const itemArrived = (index) => {
        const newItems = [...cart.items];
        newItems.splice(index, 1);
        setCart({
            ...cart, items: newItems,
        });
    };

    return (
        <div aria-live="polite" aria-atomic="true" className="bg-dark position-relative">
            <ToastContainer position="top-end" className="p-3">
                {cart.items.map((x, i) => <Toast key={"notify" + (
                    cart.items.length - i
                )} onClose={() => itemArrived(i)}>
                    <Toast.Header>
                        <img src={x.image} className="rounded me-2" alt="" width={32}/>
                        <strong className="me-auto">{x.title}</strong>
                        <small style={{'color': 'red'}}>{formatPrice(-x.price)}</small>
                    </Toast.Header>
                    <Toast.Body>Your {x.title} will arrive shortly...</Toast.Body>
                </Toast>)}
            </ToastContainer>
        </div>
    );
}
