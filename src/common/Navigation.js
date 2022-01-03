import {Container, Image, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import icon from './cinema.svg';

export default function Navigation() {
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
          Seat B17
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
