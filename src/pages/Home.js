import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';
import TechLogos from '../components/TechLogos';
import ProjectRows from '../components/ProjectRows';
import adisScooter1 from '../images/adisScooter1.svg';
import test from '../images/test1440.jpg';

function Home() {
    return (
        <>
        <Hero>
            <Description>
                <TextBox>
                <h1>Testing Testing</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi, eaque ex doloribus suscipit doloremque accusamus voluptatem in error corporis excepturi nobis vitae alias nulla. Temporibus natus sapiente magnam adipisci!</p>
                </TextBox>
            </Description>
            <Avatar>
                <Scooter src={adisScooter1} />
            </Avatar>
            <Image>
                <Test src={test} />
            </Image>
        </Hero>
        <TechLogos />
        <Projects />
        <ProjectRows />
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
    width: 30%;
    height: 100%;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-left: 20px;
    padding-left: 20px;
    h1 {
        font-family: 'Lato', sans-serif;
        font-weight: 800;
        line-height: 150%;
        margin-left: 0;
        padding-left: 0;
    }
    p {
        font-family: 'Gothic A1', sans-serif;
        line-height: 200%;
    }
`;

const Avatar = styled.div`
    display: flex;
    background-color: red;
    align-items: center;
    height: 100%;
    z-index: 0;
    width: 5%;
`;

const Scooter = styled.img`
    position: relative;
    z-index: 1;
    height: auto;
    width: 30vw;
    top: 55px;
    left: 20px;
`;

const Image = styled.div`
    display: flex;
    background-color: purple;
    width: 50%;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Test = styled.img`
    display: flex;
    width: 80%;
    align-items: center;
    height: auto;
`;

export default Home;