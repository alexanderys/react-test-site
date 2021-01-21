import styled from 'styled-components';

const content = [
    {
        title: "Floress",
        src: "https://images.unsplash.com/photo-1533136251085-1abf189c72e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum voluptate consequatur vel voluptatum qui harum ullam quasi similique expedita pariatur sit distinctio, possimus molestias dolorem assumenda culpa error ut"
    },
    {
        title: "Explo",
        src: "https://images.unsplash.com/photo-1610640803070-39f37ad4e739?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum voluptate consequatur vel voluptatum qui harum ullam quasi similique expedita pariatur sit distinctio, possimus molestias dolorem assumenda culpa error ut"
    },
    {
        title: "Shaded",
        src: "https://images.unsplash.com/photo-1588082992711-b3ccba3d8c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum voluptate consequatur vel voluptatum qui harum ullam quasi similique expedita pariatur sit distinctio, possimus molestias dolorem assumenda culpa error ut"
    },
    {
        title: "Reptive",
        src: "https://images.unsplash.com/photo-1610954424460-822d4f151ae9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=622&q=80",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum voluptate consequatur vel voluptatum qui harum ullam quasi similique expedita pariatur sit distinctio, possimus molestias dolorem assumenda culpa error ut"
    },
    {
        title: "Sprilled",
        src: "https://images.unsplash.com/photo-1610995889666-af63f9f0d48e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=793&q=80",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum voluptate consequatur vel voluptatum qui harum ullam quasi similique expedita pariatur sit distinctio, possimus molestias dolorem assumenda culpa error ut"
    },
    {
        title: "Floas",
        src: "https://images.unsplash.com/photo-1610403412150-b14ce27a84c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum voluptate consequatur vel voluptatum qui harum ullam quasi similique expedita pariatur sit distinctio, possimus molestias dolorem assumenda culpa error ut"
    }
];

/* Styles */
const DIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        width: 50%;
        border: 5px solid white;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 70px;
    }
    & div * {
        padding: 10px;
    }
    & div h2 {
        font-weight: 500;
        letter-spacing: 0.1rem;
    }
    & img {
        width: 500px;
        height: 500px;
    }
`
/* Styles END */

function Home() {
    return (
        <DIV>
            {content.map((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <img src={item.src} alt="photograph" />
                        <p>{item.text}</p>
                    </div>
                );
            })}
        </DIV>
    );
}

export default Home;