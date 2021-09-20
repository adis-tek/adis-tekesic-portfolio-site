import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectRows from '../components/ProjectRows';
import WebScrapers from '../components/WebScrapers';
import three_b from '../images/project_breathe/three_b_edited.png';
import wide_smile from '../images/home/wide_smile.png';
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

function Home() {
    return (
<motion.div variants={fadeIn} initial="hidden" animate="show">
    <HomeContainer>
        <Intro>
            <Message>
            <Memoji src={wide_smile} alt="wide_smile_Adis" />
            <TextContainer>
            <HeadingText>Hi, I'm Adis</HeadingText>
            <Text>
            I'm a front-end developer and I've been developing web apps for over a year.
            </Text>
            <RowLink>
                <Link to="/contact"><RowButton>Contact Me</RowButton></Link>
            </RowLink>
            </TextContainer>
            </Message>
        </Intro>
        <Line />
        <Hero>
            <Description>
                <TextBox>
                <TextBoxHeading>Web Apps for the Real World</TextBoxHeading>
                <TextBoxParagraph>All of my projects showcase web apps with real-world potential.</TextBoxParagraph>
                <RowLink>
                    <Link to="/about"><RowButton>About Me</RowButton></Link>
                </RowLink>
                </TextBox>
            </Description>
            <Image>
                <AppImage src={three_b} />
            </Image>
        </Hero>
        <Line2 />
        <ProjectRows />
        <WebScrapers />
    </HomeContainer>
</motion.div>
    );
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    margin: 10px 0px 80px 0px;
    @media (max-width: 1025px) {
        margin: 10px 0px 80px 0px;
    }
`;

const Memoji = styled.img`
    width: 300px;
    height: auto;
    object-fit: cover;
    margin-right: 50px;
    @media (max-width: 1025px) {
        width: 366px;
        margin-right: 0px;
    }
    @media (max-width: 550px) {
        width: 266px;
    }
    @media (max-width: 450px) {
        width: 225px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0px 0px 55px 0px;
    align-items: flex-start;
    @media (max-width: 1025px) {
        align-items: center;
        margin: 30px 0px 0px 0px;
    }
`;

const HeadingText = styled.h1`
    width: 100%;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    font-weight: 400;
    @media (max-width: 1025px) {
        font-size: 48px;
        text-align: center;
    }
    @media (max-width: 550px) {
        width: 266px;
        font-size: 42px;
    }
`;


const Text = styled.h2`
    font-family: 'Roboto', sans-serif;
    width: 400px;
    margin: 0px 0px 10px 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: black;
    @media (max-width: 1025px) {
        width: 366px;
        font-size: 25px;
        margin: 0px 0px 0px 35px;

    }
    @media (max-width: 550px) {
        width: 266px;
        font-size: 21px;
        margin: 0px 0px 0px 35px;
    }

`;

const Line = styled.div`
    width: 90%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 80px 0px 0px 0px;
`;

const Line2 = styled.div`
    width: 90%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 50px 0px 0px 0px;
    @media (max-width: 1025px) {
        margin: 50px 0px 50px 0px;
    }
`;

const Message = styled.div`
    position: relative;
    display: flex;
    bottom: 0px;
    flex-direction: row;
    width: 100vw;
    height: auto;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin: 50px 0px 0px 0px;
    @media (max-width: 1025px) {
        flex-direction: column;
        margin-top: 10px;
    }
`;

const Intro = styled.div`
    display: flex;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.0);
    align-items: center;
    @media (max-width: 1025px) {
        margin-top: 30px;
        height: auto;
    }
`;

const Hero = styled.div`
    display: flex;
    max-width: 1350px;
    width: 100%;
    height: 400px;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 50px 0px;
    @media (max-width: 1025px) {
        flex-direction: column-reverse;
        height: 700px;
        margin: 60px 0px 0px 0px;
    }
    @media (max-width: 900px) {
        flex-direction: column-reverse;
        margin: 50px 0px 0px 0px;
    }
    @media (max-width: 800px) {
        flex-direction: column-reverse;
        height: 600px;
        margin: 60px 0px 0px 0px;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        height: 600px;
        margin: 60px 0px 0px 0px;
    }
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        height: 550px;
        margin: 40px 0px 0px 0px;
    }
    @media (max-width: 500px) {
        flex-direction: column-reverse;
        height: 550px;
        margin: 60px 0px 0px 0px;
    }
    @media (max-width: 475px) {
        flex-direction: column-reverse;
        height: 500px;
        margin: 60px 0px 0px 0px;
    }
    @media (max-width: 425px) {
        flex-direction: column-reverse;
        height: 500px;
        margin: 60px 0px 0px 0px;
    }
    @media (max-width: 350px) {
        flex-direction: column-reverse;
        height: 500px;
        margin: 60px 0px 0px 0px;
    }
`;


const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    width: 30%;
    height: auto;
    margin: 0px 20px;
    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
        margin: 10px 0px 0px 0px;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-left: 10px;
    padding-left: 10px;
    @media (max-width: 1025px) {
        width: 100%;
        align-items: center;
    }
`;

const TextBoxHeading = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 15px;
    @media (max-width: 1025px) {
        font-size: 32px;
        width: 60%;
        margin: 15px 0px;
        align-self: center;
    }
    @media (max-width: 525px) {
        width: 80%;
    }
`;

const TextBoxParagraph = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 0px 0px 12.5px 0px;
    @media (max-width: 1025px) {
        line-height: 32px;
        font-size: 22px;
        width: 60%;
        align-self: center;
        margin: 0px 0px 5px 0px;
    }
    @media (max-width: 525px) {
        width: 80%;
    }
`;

const Image = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    height: 30;
    margin: 0 20px;
    @media (max-width: 1025px) {
        margin: 0px 0px 0px 20px;
        width: 100%;
    }
`;

const AppImage = styled.img`
    display: flex;
    width: 100%;
    align-items: center;
    height: auto;
    @media (max-width: 1025px) {
        width: 98%;
    }
    @media (max-width: 700px) {
        width: 98%;
    }
`;

const RowButton = styled.button`
    max-width: 230px;
    width: 230px;
    height: 50px;
    background-color: rgb(15, 15, 15);
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 17px;
    border-radius: 0px;
    text-align: center;
    justify-content: center;
    outline: none;
    border: none;
    //box-shadow: 5px 6px 7px rgba(5, 5, 5, 0.3);
    letter-spacing: 1.5px;
    padding: 1.2rem 3.6rem;
    transition: all 0.5s ease;
    margin: 17.5px 0px;
    cursor: pointer;
    &:hover{
        transform: translate(0px, -7.5px);
    }
    @media (min-width: 1700px) {
        height: 55px;
    }
    @media (max-width: 1025px) {
        margin: 30px 0px 0px 0px;
        width: 50%;
        min-width: 200px;
        width: 250px;
    }
`;

const RowLink = styled(Link) `
    @media (min-width: 1026px) {
        max-width: 500px;
        max-height: 11px;
    }
    @media (max-width: 1025px) {
        width: 60%;
    }
    @media (max-width: 550px) {
        width: 80%;
    }
`;

export default Home;