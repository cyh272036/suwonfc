import './App.scss';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" style={{backgroundColor: "#0B1648"}}>

        <Container>

          <Navbar.Brand href="#home">
            <img src="./img/logo.png" alt="" />
          </Navbar.Brand>

          <Nav className="me-auto">

            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#features">Features</Nav.Link>

            <Nav.Link href="#pricing">Pricing</Nav.Link>

          </Nav>

        </Container>

      </Navbar>
    </div>
  );
}

export default App;
