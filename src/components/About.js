import styled from 'styled-components';

/* Styles */
const DIV = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-bottom: 100px;

    & h1 {
        font-weight: 500;
        font-size: 3rem;
        text-decoration: underline;
    }
    & h2 {
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 0px;
    }
    & p {
        margin: 0;
        line-height: 1.8rem;
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
        margin-bottom: 25px;
    }
`
/* Styles END */

function About() {
    return (
        <DIV>
            <h1>About me</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit vel cupiditate aliquid itaque suscipit aperiam alias sed, nostrum nam molestiae placeat assumenda aut delectus impedit architecto ipsum, accusamus voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusantium, eligendi ullam harum quibusdam corrupti doloribus minima repellendus molestiae omnis quod sit distinctio nulla dolorum nam repudiandae iusto, qui placeat!
            </p>

            <h2>The stories behind the photos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit vel cupiditate aliquid itaque suscipit aperiam alias sed, nostrum nam molestiae placeat assumenda aut delectus impedit architecto ipsum, accusamus voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusantium, eligendi ullam harum quibusdam corrupti doloribus minima repellendus molestiae omnis quod sit distinctio nulla dolorum nam repudiandae iusto, qui placeat!
            </p>

            <h2>Photograph technique</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit vel cupiditate aliquid itaque suscipit aperiam alias sed, nostrum nam molestiae placeat assumenda aut delectus impedit architecto ipsum, accusamus voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusantium, eligendi ullam harum quibusdam corrupti doloribus minima repellendus molestiae omnis quod sit distinctio nulla dolorum nam repudiandae iusto, qui placeat!
            </p>
        </DIV>
    );
}

export default About;