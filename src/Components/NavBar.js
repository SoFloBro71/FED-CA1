import { Navbar, Container, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';


const NavBar = (props) => {

    // SEARCH BAR 
    let navigate = useNavigate();

    const handleInputChange = (e) => {
        navigate('/');
        props.onHandleChange(e);

        console.log(e);
    }



    return (
        <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">Countries</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <input type='text' onChange={handleInputChange} value={props.searchTerm}/>
                <DropdownButton id="dropdown-basic-button" title="Filter Regions">
                    <Dropdown.Item value="Europe"><Link to='/region/europe'>Europe</Link> </Dropdown.Item>
                    <Dropdown.Item value="Asia"><Link to='/region/asia'>Asia</Link></Dropdown.Item>
                    <Dropdown.Item value="Americas"><Link to='/region/americas'>Americas</Link></Dropdown.Item>
                    <Dropdown.Item value="Africa"><Link to='/region/africa'>Africa</Link></Dropdown.Item>
                    <Dropdown.Item value="All"><Link to='/'>All</Link></Dropdown.Item>
                </DropdownButton>
            </Nav>
        </Container>
        </Navbar>
        </>

        );
    }


export default NavBar;