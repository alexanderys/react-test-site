import styled from 'styled-components';

/* Styles */
const FOOTER = styled.footer`
    text-align: center;
    padding: 15px 0;
    border-top: 2px solid white;
    border-bottom: 2px solid white;

    & p {
        margin: 0;
    }
`
/* Styles END */

function Footer() {
    return (
        <FOOTER>
            <p>Alexander YS &copy; 2020. All rights reserved.</p>
        </FOOTER>
    );
}

export default Footer;