import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* Styles */
const UL = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
    padding: 10px 0;
    margin-top: 0;

    & > li > a {
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 500;
        color: white;
    }
`
/* Styles END */

function Navbar() {
    return (
        <nav>
            <UL>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </UL>
        </nav>
    );
}

export default Navbar;