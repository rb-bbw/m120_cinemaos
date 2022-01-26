import {Container, Image, Navbar, Offcanvas} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import icon from './cinema.svg';
import {formatPrice} from "./Helpers";
import './navigation.css'
import Notifications from "./Notifications";

export default function Navigation({cart, setCart}) {
    return (
        <Navbar bg="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image src={icon} alt="" width={32} height={32}/>{' '}
                        CinemaOS
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Text>
                    {formatPrice(cart.balance)}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-3"/>
                </Navbar.Text>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    keyboard={true}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Your Orders</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Notifications cart={cart} setCart={setCart}/>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}
