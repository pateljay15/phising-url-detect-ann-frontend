import './App.css';
import { NavItem, NavbarBrand, NavbarToggler,Navbar, Collapse, DropdownMenu, DropdownItem, NavbarText,  Nav, NavLink,UncontrolledDropdown, DropdownToggle, Container  } from "reactstrap"
import Card from './Card';

function App() {
  return (
    <div className='App' style={{backgroundColor: "#172b4d", height:"100%"}}>
        <Navbar
          color="dark"
          dark
          expand="md"
          light
        >
          <NavbarBrand href="/">
            Phising URL Prediction
          </NavbarBrand>
        </Navbar>
        <Container className='py-500' style={{height: "643px"}}>
          <Card />
        </Container>
    </div>
  );
}

export default App;
