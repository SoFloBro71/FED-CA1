import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";


const NavBar = ({ authenticated, onAuthenticated }) => {

    const navigate = useNavigate();

    const logout = () => {
        onAuthenticated(false);
        navigate('/');
    }

    return(
        <>
            <Link to='/'>Home </Link> |
            <Link to='/festivals'> All Festivals</Link> |
            <Link to='/festivals/create'> Create Festivals</Link>

            { (authenticated) ? (<button onClick={logout}>Logout</button>) : ("") }

        </>
    );
};

export default NavBar