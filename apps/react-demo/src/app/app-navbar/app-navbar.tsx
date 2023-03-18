import styles from './app-navbar.module.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface AppNavbarProps {}

export function AppNavbar(props: AppNavbarProps) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">SalehLoke's Todos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#link1">Link 1</Nav.Link>
            <Nav.Link href="#link2">Link 2</Nav.Link>
            <Nav.Link href="#link3">Link 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
