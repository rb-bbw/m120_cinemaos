import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import {Container} from 'react-bootstrap';
import WelcomeScreen from './welcome/WelcomeScreen';
import {Route, Routes} from 'react-router-dom';
import Navigation from './common/Navigation';
import AssortmentOverview from './snacks/AssortmentOverview';
import ItemDetail from './snacks/ItemDetail';
import ToiletRadar from "./lavatory/ToiletRadar";
import {useState} from "react";

// TODO nested route
function App() {
    const [cart, setCart] = useState({
        balance: 4250, items: []
    })
    return (
        <>
            <Navigation/>
            <Container>
                <Routes>
                    <Route path="/" element={<WelcomeScreen />} />
                    <Route path="/assortment"
                           element={<AssortmentOverview cart={cart} setCart={setCart} />} />
                    <Route path="/assortment/:category/:item"
                           element={<ItemDetail cart={cart} setCart={setCart} />} />
                    <Route path="/lavatory" element={<ToiletRadar />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
