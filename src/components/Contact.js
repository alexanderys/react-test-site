import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

/* Styles */
const DIV = styled.div`
    width: 60%;
    margin: 0 auto;
    background-color: white;
    margin-bottom: 50px;
    color: black;
    padding-bottom: 100px;
    border-radius: 20px;

    & h1 {
        text-align: center;
        padding: 20px;
        font-weight: 500;
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    & form {
        width: 30%;
    }
    & input, & textarea {
        display: block;
        width: 100%;
        border: none;
        border-radius: 30px;
        margin-bottom: 5px;
        background-color: #e6e6e6;
        font-family: 'Poppins', sans-serif;   
    }
    & input {
        box-sizing: border-box;
        height: 30px;
        padding: 0 20px;
    }
    & textarea {
        padding: 20px;
        box-sizing: border-box;
    }
    & input[type="submit"] {
        margin-top: 20px;
        background-color: rgb(129, 206, 231);
        color: white;
        font-weight: 500;
        cursor: pointer;
        width: 100%;
        height: 45px;
    }
`
/* Styles END */

function Contact() {
    return (
        <DIV>
            <h1>Contact Me</h1>
            <div>
                <FontAwesomeIcon icon={faEnvelopeOpenText} size="10x" />
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </DIV>
    );
}

export default Contact;