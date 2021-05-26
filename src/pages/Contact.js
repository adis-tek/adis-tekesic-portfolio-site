import React from 'react';
import styled from 'styled-components';
import mail from '../images/contact/mail.png';
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

function Contact() {
    return (
    <motion.div variants={fadeIn} initial="hidden" animate="show">
        <ContactContainer>
            <Mail src={mail} alt="mail" />
            <Header>Let's Talk!</Header>
            <Subtitle>I'm currently look for a fun place to work at. You can  <Highlight1>email</Highlight1> me or you can send me a message on <Highlight2>LinkedIn</Highlight2>.</Subtitle>
        </ContactContainer>
    </motion.div>
    )
}

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 60px;
`;

{/* const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50vw;
    height: auto;
    border: 3px solid rgba(5, 5, 5, 0.1);
    box-shadow:  6px 6px 5px rgba(5, 5, 5, 0.2);
`; */}

const Mail = styled.img`
    width: 600px;
    height: auto;
    object-fit: cover;
    margin: 40px 0px;
    @media (max-width: 615px) {
        width: 95%;
    }
`;

const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    width: 50%;
    height: auto;
    font-size: 60px;
    margin-bottom: 35px;
    @media (min-width: 1245px) {
        width: 622px;
    }
    @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
    }
    @media (max-width: 615px) {
        width: 100%;
        text-align: center;
        font-size: 50px;
    }
    @media (max-width: 475px) {
        font-size: 45px;
    }
    @media (max-width: 350px) {
        font-size: 42.5px;
    }
`;

const Subtitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    width: 50%;
    height: auto;
    font-size: 30px;
    margin-bottom: 25px;
    line-height: 1.5;
    font-weight: 500;
    @media (min-width: 1245px) {
        width: 622px;
    }
    @media (max-width: 1000px) {
        width: 40%;
        font-size: 27px;

    }
    @media (max-width: 800px) {
        width: 50%;
        margin-left: 15px;

    }
    @media (max-width: 615px) {
        width: 50%;
        font-size: 25px;
    }

    @media (max-width: 475px) {
        font-size: 23px;
    }
    @media (max-width: 415px) {
        width: 60%;
        font-size: 23px;
    }
    @media (max-width: 350px) {
        width: 70%;
        font-size: 22px;
    }
`;


const Highlight1 = styled.span`
    color: #F35421;
    text-decoration: underline;
`;

const Highlight2 = styled.span`
    color: #4D69FA;
    text-decoration: underline;
`;

export default Contact
