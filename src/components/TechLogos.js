import React from 'react';
import styled from 'styled-components';
import icon from '../images/icon.png';

function TechLogos() {
    return (
        <>
            <TechLogosSection>
                <LogosRoll>
                    <Logo src={icon} />
                    <Logo src={icon} />
                    <Logo src={icon} />
                    <Logo src={icon} />
                    <Logo src={icon} />
                    <Logo src={icon} />
                    <Logo src={icon} />
                    <Logo src={icon} />
                    <Logo src={icon} />
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

const Logo = styled.img`
    display: flex;
    width: 10%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    margin-right: 30px;
`;

export default TechLogos;