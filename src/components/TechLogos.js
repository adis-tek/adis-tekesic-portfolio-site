import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import icon from '../images/home/icon.png';
import html from '../images/home/html_icon.png';
import css from '../images/home/css_icon.png';
import react from '../images/home/react_icon.png';
import sass from '../images/home/sass_icon.png';
import vs from '../images/home/vs_icon.png';
import style from '../images/home/style_icon.png';
import redux from '../images/home/redux_icon.png';
import framer from '../images/home/motion_icon.png';
import js from '../images/home/js_icon.png';
import github from '../images/home/github_icon.png';

function TechLogos() {
    return (
        <TechLogosSectionContainer>
            <TechLogosSection>
                <LogosRoll
                            as={motion.div}
                            animate={{x: [0, -1035] }}
                            transition={{ 
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 12,
                                ease: "linear",
                            }}>
                    <Logo src={vs} />
                    <Logo src={style} />
                    <Logo src={react} />
                    <Logo src={sass} />
                    <Logo src={redux} />
                    <Logo src={framer} />
                    <Logo src={js} />
                    <Logo src={github} />
                </LogosRoll>
            </TechLogosSection>
        </TechLogosSectionContainer>
    )
}

const TechLogosSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        height: 175px;
    }
    @media (max-width: 500px) {
        height: 150px;
    }
`;

const TechLogosSection = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    align-self: center;
    overflow: hidden;
    border-radius: 6px;
    //border-top: 1px solid rgba(0, 0, 0, 0.2);
    //border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
    @media (max-width: 700px) {
        height: 145px;
    }
    @media (max-width: 500px) {
        height: 100px;
    }
`;

const LogosRoll = styled.div`
    display: flex;
    width: auto;
    height: 200px;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        height: 145px;
    }
    @media (max-width: 500px) {
        height: 100px;
    }
`;

const logoAnimation = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
`;

const Logo = styled.img`
    position: relative;
    display: flex;
    width: auto;
    height: 125px;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    margin: 0px 40px;
    @media (max-width: 700px) {
        height: 145px;
    }
    @media (max-width: 500px) {
        height: 100px;
    }
`;

export default TechLogos;