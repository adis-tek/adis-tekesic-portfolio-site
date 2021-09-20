import React from 'react';
import styled from 'styled-components';
import type from '../images/about/type.png';
import dart from '../images/about/dart.png';
import coin from '../images/about/coin.png';
import speaker from '../images/about/speaker.png';
import arrow from '../images/about/arrow.png';
import { Link } from 'react-router-dom';
import wp from '../pdf/Exacaster_Telco_White_Paper.pdf';
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

function About() {
    return (
        <motion.div variants={fadeIn} initial="hidden" animate="show">
        <AboutContainer>
            <Type src={type} alt="type" />
            <Header>Why Code?</Header>
            <Main>The world is moving towards an ever more interconnected world — especially with the advent of crypto and IoT.</Main>
            <Main>Front-end development is the perfect role for working on this growing digital environment. I really like the idea of being able to pivot onto a more specific
                segment of online projects like crypto, robotics, or artificial intelligence.
            </Main>
                <IconSection>
                    <Paragraph>
                        <Icon src={dart} alt="dart and board" />
                        <Text>Purpose-driven apps are the ones most likely to change the world; the bigger the purpose the greater the app.
                            Is there a task better than changing the world?
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        <Icon src={coin} alt="money" />
                        <Text>Great UIs and UX experiences not only make apps look professional but also
                            form a positive impression on the users — and building trust is crucial for brands.
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        <Icon src={speaker} alt="conversation box" />
                        <Text>Communicating properly with people requires more than just text. Devs wrap their
                            messages in intricate layouts, inviting animations, stunning graphics and it all 
                            culminates into an addicting experience.
                        </Text>
                    </Paragraph>
                </IconSection>
                <MobileIconSection>
                    <Icon src={dart} alt="dart and board" />
                    <Text>Helping viewers understand your message is like a game of darts — you’re always trying to hit the bullseye; you need your customer to 100% get the message, proposition, or product you’re putting out.</Text>
                    <Icon src={coin} alt="money" />
                    <Text>Money is moving around the internet like never before and what stands in the way of excellent ROIs is communication — that means I make a career out of hitting bullseyes with customers by simply helping them understand the brand.</Text>
                    <Icon src={speaker} alt="conversation box" />
                    <Text>Excellent communication leads to more people talking about you. Ideas are like viruses and the good ones spread far and fast. And since everyone and everything nowadays is a brand, excellent communication is what the world needs the most.</Text>
                </MobileIconSection>
            <Main>One of the most alluring parts of being a dev is knowing that you're constantly working
                on the future and you'll never really know what problems you'll solve next. It's quite the role.
            </Main>
        </AboutContainer>
        </motion.div>
    )
}

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 900px;
    height: auto;
    text-align: left;
    margin-top: 60px;
    margin-bottom: 120px;
`;

const Type = styled.img`
    width: 600px;
    height: auto;
    object-fit: cover;
    margin-bottom: 100px;
    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 75px;
    }
`;

const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    text-align: left;
    width: 900px;
    font-size: 60px;
    margin-bottom: 20px;
    @media (max-width: 1025px) {
        width: 75%;
    }
    @media (max-width: 1000px) {
        font-size: 55px;
    }
    @media (max-width: 550px) {
        font-size: 50px;
    }
    @media (max-width: 430px) {
        width: 75%;
        font-size: 45px;
    }
    @media (max-width: 380px) {
        font-size: 35px;
        margin-bottom: 20px;
    }
`;

const Main = styled.h2`
    font-family: 'Roboto', sans-serif;
    width: 900px;
    font-size: 25px;
    margin: 12.5px 0px 12.5px 0px;
    line-height: 1.5;
    font-weight: 500;
    @media (max-width: 1025px) {
        width: 75%;
    }
    @media (max-width: 675px) {
        font-size: 23.5px;
    }
    @media (max-width: 530px) {
        font-size: 22px;
    }
    @media (max-width: 430px) {
        font-size: 20px;
    }
    @media (max-width: 380px) {
        font-size: 18px;
    }
`;

const IconSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: auto;
    padding: 20px 0px;
    margin-top: 0px;
    @media (max-width: 1025px) {
        display: none;
    }
`;

const MobileIconSection = styled.div`
    display: none;
    @media (max-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 75%;
    height: auto;
    margin: 5px 0px 12.5px 0px;
    }
`;

const Paragraph = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Roboto', sans-serif;
    width: 70%;
    margin-bottom: 0px;
    height: 300px;
    @media (min-width: 1026px) {
        width: 822px;
    }
    @media (max-width: 1025px) {
        flex-direction: column;
        width: 100%;
        margin: 105px;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
        margin-top: 105px;
        margin-bottom: 105px;
        
    }

`;

const Icon = styled.img`
    position: relative;
    width: 220px;
    height: auto;
    object-fit: cover;
    margin: 0px 40px;
    @media (max-width: 1025px) {
        width: 200px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    @media (max-width: 700px) {
        width: 190px;
    }
    @media (max-width: 600px) {
        width: 50%;
    }
    @media (max-width: 500px) {
        width: 55%;
    }
    @media (max-width: 400px) {
        width: 65%;
    }
    @media (max-width: 380px) {
        width: 70%;
    }
`;

const Text = styled.h2`
    position: relative;
    font-family: 'Roboto', sans-serif;
    width: 500px;
    font-size: 25px;
    line-height: 1.5;
    font-weight: 500;
    @media (max-width: 1024px) {
        flex-direction: column;
        width: 100%;
    }
    @media (max-width: 675px) {
        font-size: 23.5px;
    }
    @media (max-width: 530px) {
        font-size: 22px;
    }
    @media (max-width: 430px) {
        font-size: 20px;
    }
    @media (max-width: 380px) {
        font-size: 18px;
    }
`;

const Cta = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    @media (min-width: 1025px) {
        width: 550px;
    }
`;

const Arrow = styled.img`
    width: 40%;
    height: auto;
    object-fit: cover;
    margin: 0px 40px;
`;

const ContactMe = styled.button`
    font-family: 'Roboto', sans-serif;
    width: auto;
    height: auto;
    font-size: 60px;
    margin-bottom: 35px;
    color: #F35421;
    background-color: rgb(5, 5, 5);
    outline: none;
    transition: all .3s ease-out;
    cursor: pointer;
    text-align: center;
    align-self: center;
    :hover {
        transform: translate(0px, -20px);
    }
    @media (min-width: 1245px) {
    }
`;

const Highlight = styled.span`
    color: #4D69FA;
    text-decoration: underline;
`;

export default About;
