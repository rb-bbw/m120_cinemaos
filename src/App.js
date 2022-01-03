import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import {Container} from 'react-bootstrap';
import WelcomeScreen from './welcome/WelcomeScreen';
import {Route, Routes} from 'react-router-dom';
import Navigation from './common/Navigation';
import SnacksScreen from './snacks/SnacksScreen';
import ToiletRadar from "./lavatory/ToiletRadar";

function App() {
    return (
        <>
            <Navigation/>
            <Container>
                <Routes>
                    {/* TODO nested route */}
                    <Route path="/" element={<WelcomeScreen />} />
                    <Route path="/snacks" element={<SnacksScreen />} />
                    <Route path="/lavatory" element={<ToiletRadar />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
