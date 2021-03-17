import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';
import adisScooter1 from '../images/adisScooter1.svg';

function Home() {
    return (
        <>
        <Hero>
            <Description>
                <h1>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi, eaque ex doloribus suscipit doloremque accusamus voluptatem in error corporis excepturi nobis vitae alias nulla. Temporibus natus sapiente magnam adipisci!</p>
            </Description>
            <Avatar>
                <Scooter src={adisScooter1} />
            </Avatar>
            <Image>
                <h1>Showcase</h1>
            </Image>
        </Hero>
        <Projects />
        </>
    );
};

const Hero = styled.div`
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: space-around;
    background-color: white;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 0.4;
    height: 100%;
    h1 {

    }
`;

const Avatar = styled.div`
    display: flex;
    background-color: red;
    flex-grow: 0.1;
    align-items: center;
    height: 100%;
`;

const Scooter = styled.img`
    height: 900px;
    width: 900px;
`;

const Image = styled.div`
    display: flex;
    background-color: purple;
    flex-grow: 0.5;
    align-items: center;
    height: 100%;
`;

export default Home;