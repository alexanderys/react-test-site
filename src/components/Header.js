import Navbar from './Navbar'
import styled from 'styled-components';

/* Styles */
const DIV = styled.div`
    margin-bottom: 50px;
    & > img {
        width: 100%;
        height: 70vh;
        }
`
/* Styles END */

function Header() {
    return (
        <DIV>
            <img src="https://images.unsplash.com/photo-1533136036465-1861830963f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="front image" />
            <Navbar />
        </DIV>
    );
}

export default Header;