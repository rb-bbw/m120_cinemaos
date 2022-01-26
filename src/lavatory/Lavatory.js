import {Container, Row} from "react-bootstrap";
import BackgroundVideo from "./BackgroundVideo";
import ToiletRadar from "./ToiletRadar";

export default function Lavatory() {
    return (
        <Container fluid>
            <Row>
                <BackgroundVideo src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"/>
            </Row>
            <ToiletRadar/>
        </Container>
    );
}
