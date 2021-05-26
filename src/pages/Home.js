import React from 'react';
import styled from 'styled-components';
import TechLogos from '../components/TechLogos';
import ProjectRows from '../components/ProjectRows';
import adis_scooter from '../images/home/adis_scooterPNG.png';
import three_b from '../images/project_breathe/three_b_edited.png';
import wide_smile from '../images/home/wide_smile.png';
import github from '../images/home/github.png';
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
            I started teaching myself front-end
            web development a year ago
            and now I make cool apps
            </Text>
            </TextContainer>
            </Message>
        </Intro>
        {/* <TechLogos /> */}
        <Line />
        <Hero>
            <Description>
                <TextBox>
                <TextBoxHeading>Making Apps That Excite People</TextBoxHeading>
                <TextBoxParagraph>A great app is just a digital experience users love.</TextBoxParagraph>
                </TextBox>
            </Description>
            <Image>
                <AppImage src={three_b} />
            </Image>
        </Hero>
        <Line2 />
        <ProjectRows />
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
    margin-top: 20px;
    max-width: 500px;
`;

const HeadingText = styled.h1`
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
    margin-bottom: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: black;
    @media (max-width: 1025px) {
        width: 366px;
        font-size: 25px;
        margin-left: 35px;

    }
    @media (max-width: 550px) {
        width: 266px;
        font-size: 21px;
        margin-left: 15px;
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
    margin: 50px 0px 50px 0px;
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

const IntroBackground = styled.div`
    position: relative;
    background-color: blue;
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

const BottomContact = styled.div`
    position: absolute;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.1rem;
    display: flex;
    align-self: center;
    justify-content: center;
    width: 60vw;
    height: 40px;
    border-top: 1px solid rgba(5, 5, 5, 0.1);
    border-bottom: 1px solid rgba(5, 5, 5, 0.1);
    bottom: 100px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(5, 5, 5, 1);
`;

const Comment = styled.div`
    display: flex;
    width: 33%;
    border-right: 1px solid rgba(5, 5, 5, 0.1);
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-left: 40px;
    
`;

const CommentText = styled.h2`
    width: 100%;
    margin-right: 20px;
    text-align: center;
    font-size: 13px;
`;

const Email = styled.div`
    position: relative;
    display: flex;
    width: 33%;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: center;
`;

const SocialMedia = styled.div`
    position: relative;
    right: 0px;
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(5, 5, 5, 0.1);
`;

const Github = styled.img`
    width: 17px;
    height: auto;
    object-fit: cover;
    justify-self: center;
    align-self: center;
    margin-right: 20px;
`;

const LinkedIn = styled.img`
    width: 17px;
    height: auto;
    object-fit: cover;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 30%;
    height: auto;
    margin: 0px 20px;
    @media (max-width: 1025px) {
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
    @media (max-width: 1025px) {
        line-height: 32px;
        font-size: 22px;
        width: 60%;
        align-self: center;
    }
    @media (max-width: 525px) {
        width: 80%;
    }
`;

const Avatar = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 0;
    width: 3%;
`;

const Scooter = styled.img`
    position: relative;
    z-index: 1;
    height: auto;
    width: 20vw;
    top: 55px;
    left: 20px;
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

export default Home;