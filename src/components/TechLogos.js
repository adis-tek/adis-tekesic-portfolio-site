import React from 'react';
import styled, { keyframes } from 'styled-components';
import icon from '../images/icon.png';
import html from '../images/html_icon.png';
import css from '../images/css_icon.png';
import react from '../images/react_icon.png';
import sass from '../images/sass_icon.png';
import vs from '../images/vs_icon.png';
import style from '../images/style_icon.png';
import redux from '../images/redux_icon.png';
import motion from '../images/motion_icon.png';
import js from '../images/js_icon.png';
import github from '../images/github_icon.png';

function TechLogos() {
    return (
        <>
            <TechLogosSection>
                <LogosRoll>
                    <Logo src={vs} />
                    <Logo src={style} />
                    <Logo src={react} />
                    <Logo src={sass} />
                    <Logo src={redux} />
                    <Logo src={motion} />
                    <Logo src={js} />
                    <Logo src={github} />
                </LogosRoll>
            </TechLogosSection>
        </>
    )
}

const TechLogosSection = styled.div`
    display: flex;
    width: 100%;
    height: 11vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-top: 3px solid rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    background-color: white;
`;

const LogosRoll = styled.div`
    display: flex;
    width: 100%;
    height: 75%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;

const logoAnimation = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
`;

const Logo = styled.img`
    display: flex;
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
    margin-left: 80px;
    margin-right: 80px;
    animation-name: ${logoAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`;

export default TechLogos;