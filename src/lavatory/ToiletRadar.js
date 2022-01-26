import {useState} from "react";
import {Button, Image, Offcanvas} from "react-bootstrap";
import image from "./restrooms.png";
import style from "./toiletRadar.module.css";

export default function ToiletRadar({props}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                onClick={handleShow}
                className={style.button}
                aria-controls="offcanvasAvailableStalls"
            >🚽</Button>
            <Offcanvas
                show={show}
                onHide={handleClose}
                {...props}
                className={style.offcanvas}
                id="offcanvasAvailableStalls"
                aria-labelledby="availableStalls"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="availableStalls">Available Stalls</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Image src={image} className={style.image}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
