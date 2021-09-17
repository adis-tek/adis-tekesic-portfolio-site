import React from 'react';
import styled from 'styled-components';
import github from '../images/footer/github.svg';
import linkedIn from '../images/footer/linkedin.svg';
import { Link } from 'react-router-dom';
import resume from '../pdf/Adis_Tekesic.pdf';

function ContactBlock() {
    return (
        <ContactBlockContainer>
        <InnerContainer>
        <Left>
        <ProjectsContainer>
        <ProjectsHeading>PROJECTS</ProjectsHeading>
            <Projects>
            <Link to="audiophile"><Project>AUDIOPHILE</Project></Link>
            <Link to="project-breathe"><Project>PROJECT BREATHE</Project></Link>
            <Link to="twitter-bot"><Project>TWITTER BOT</Project></Link>
            </Projects>
        </ProjectsContainer>
        <SocialIcons>
        <a href="https://github.com/adis-tek" target="_blank"><Icon href="https://github.com/adis-tek" src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/adis-tekesic/" target="_blank"><Icon src={linkedIn} alt="linkedIn" /></a>
        </SocialIcons>
        </Left>
        <Right>
            <Menu>
                <Link to="about"><Page>ABOUT</Page></Link>
                <Link to="contact"><Page>CONTACT</Page></Link>
                <a id="li" href={resume}>Resume<Page>RESUME</Page></a>
            </Menu>
        <SignatureContainer>
        <Signature>Designed & Developed by Adis Tekesic</Signature>
        </SignatureContainer>
        </Right>
        </InnerContainer>
        <MobileContainer>
            <Menu>
                <Link to="about"><Page>ABOUT</Page></Link>
                <Link to="contact"><Page>CONTACT</Page></Link>
                <a id="li" href={resume}>Resume<Page>RESUME</Page></a>
            </Menu>
            <SocialIcons>
                <a href="https://github.com/adis-tek" target="_blank"><Icon href="https://github.com/adis-tek" src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/adis-tekesic/" target="_blank"><Icon src={linkedIn} alt="linkedIn" /></a>
            </SocialIcons>
            <SignatureContainer>
                <Signature>Designed & Developed<br></br>by Adis Tekesic</Signature>
            </SignatureContainer>
        </MobileContainer>
        </ContactBlockContainer>
    )
}

const ContactBlockContainer = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    overflow: hidden;
    color: white;
    background-color: rgb(5, 5, 5);
    @media screen and (max-width: 1000px) {
        height: 400px;
        padding: 0px;
    }
    @media (max-width: 650px) {
        height: auto;
        padding: 40px 0px;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    max-width: 1500px;
    width: 97%;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 92.5%;
    }
    @media (max-width: 650px) {
        display: none;
    }
`;

const Left = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
`;

const Right = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: right;
`;

const ProjectsHeading = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 38px;
    letter-spacing: 1.5px;
    color: white;
`;

const Projects = styled.h2`
    margin-top: 15px;
`;

const Project = styled.h2`
    font-family: 'Noto Sans JP', sans-serif;
    margin-bottom: 10px;
    font-size: 27px;
    font-weight: 700;
    width: 300px;
    color: white;
    transition: all .3s ease-out;
    cursor: pointer;
    letter-spacing: 1.5px;
    :hover {
        transform: translate(30px, 0px);
    }
    @media (max-width: 650px) {
        -o-transition-property: none !important;
		-moz-transition-property: none !important;
		-ms-transition-property: none !important;
		-webkit-transition-property: none !important;
		transition-property: none !important;
        :hover {
        -o-transform: none !important;
		-moz-transform: none !important;
		-ms-transform: none !important;
		-webkit-transform: none !important;
		transform: none !important;
        }
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 650px) {
        align-items: center;
        margin-top: 0px;
        margin-bottom: 20px;
    }
`;

const Page = styled.h2`
    font-size: 40px;
    width: 200px;
    margin-bottom: 15px;
    color: white;
    transition: all .3s ease-out;
    cursor: pointer;
    letter-spacing: 1.5px;
    :hover {
        transform: translate(-30px, 0px);
    }
    @media (max-width: 650px) {
        -o-transition-property: none !important;
		-moz-transition-property: none !important;
		-ms-transition-property: none !important;
		-webkit-transition-property: none !important;
		transition-property: none !important;
        :hover {
        -o-transform: none !important;
		-moz-transform: none !important;
		-ms-transform: none !important;
		-webkit-transform: none !important;
		transform: none !important;
        }
    }
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SignatureContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    text-align: right;
    margin-top: 15px;
    @media (max-width: 650px) {
        align-items: center;
        justify-content: center;
        margin-top: 0;
    }
`;

const Signature = styled.h3`
    display: flex;
    justify-self: flex-end;
    align-self: flex-end;
    text-align: right;
    height: auto;
    color: white;
    bottom: 0;
    letter-spacing: 1.5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: center;
    line-height: 1.5em;
    }
`;

const SocialIcons = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 33%;
    margin-top: 30px;
    @media (max-width: 650px) {
        width: 75px;
        align-items: center;
        justify-content: space-between;
        align-self: center;
        margin-top: 0px;
        margin-bottom: 30px;
    }
`;

const Icon = styled.img`
    width: 30px;
    height: auto;
    object-fit: cover;
    margin: 0px 15px;
    cursor: pointer;
    transition: all .3s ease-out;
    :hover {
        transform: scale(1.2);
    }
    @media (max-width: 650px) {
        margin: 0px 0px;
    }
`;

const MobileContainer = styled.div`
    display: none;
    @media screen and (max-width: 650px) {
        display: flex;
        flex-direction: column;
    }
`;

export default ContactBlock;
