import React from 'react';
import styled from 'styled-components';
import test from '../../images/test1440.jpg';
import one_g from '../../images/gourmet_games/one_g.png';
import two_g from '../../images/gourmet_games/two_g.png';
import three_g from '../../images/gourmet_games/three_g.png';
import four_g from '../../images/gourmet_games/four_g.png';

function GourmetGames() {
    return (
        <ProjectContainer>
            <ProjectInnerContainer>
            <ProjectIntro>
                <IntroImage src={two_g} alt="test"/>
                <Header>Gourmet Games</Header>
                <Paragraph>Everyone loves to play a new game but not everyone has the time to go through lists of new and upcoming titles. Gourmet Games is an app that gathers the ratings, reviews, screenshots, and summary of each upcoming, new, and popular title into one clean interface.</Paragraph>
            </ProjectIntro>
            <ProjectMain>
                    <Paragraph>I decided to use React and Redux for memory management in this app as a way to get familiar with actions and reducers. The game data comes from the RAWG API that updates its game database with new titles every week.</Paragraph>
                    <RowImage src={three_g} alt="test"/>
                    <Paragraph>I styled the app using styled components (so I can keep my css in the jsx) and framer motion for the minimal animations in the app.</Paragraph>
                    <Line />
                    <CTA>Check Out The Code</CTA>
                    <Paragraph>You can view the live app as well as my code on github below.</Paragraph>
                    <Links>
                    <a href="https://github.com/adis-tek" target="_blank"><Live>Live</Live></a>
                    <a href="https://www.linkedin.com/in/adis-tekesic-a471b6171" target="_blank"><Github>Github</Github></a>
                    </Links>
            </ProjectMain>
            </ProjectInnerContainer>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 60px 0px;
    @media (max-width: 450px) {
        margin: 0px 0px 40px 0px;
    }
`;

const ProjectInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    @media (min-width: 1400px) {
        width: 1400px;
    }
`;

const ProjectMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
`;

const ProjectIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const IntroImage = styled.img`
    max-width: 1000px;
    width: 90%;
    height: auto;
    margin: 40px 50px;
    object-fit: cover;
    @media (max-width: 1025px) {
        margin: 0px 50px;
    }
`;

const Header = styled.h1`
    font-size: 40px;
    font-weight: 500;
    max-width: 900px;
    width: 90%;
    @media (max-width: 1025px) {
        font-size: 35px;
        margin: 25px 0px 0px 0px;
    }
`;

const CTA = styled.h1`
    font-size: 40px;
    font-weight: 500;
    max-width: 900px;
    width: 90%;
    margin: 30px 0px 0px 0px;
    @media (max-width: 1025px) {
        font-size: 35px;
        margin: 25px 0px 0px 0px;
    }
`;

const IntroParagraph = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    width: 1000px;
    line-height: 1.5;
    margin-top: 30px;
    margin-bottom: 50px;
`;

const Paragraph = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    max-width: 900px;
    width: 90%;
    line-height: 1.5;
    margin: 15px 10px 20px 10px;
`;

const RowImage = styled.img`
    max-width: 900px;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 60px 10px 60px 10px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;
    img {
        width: 200px;
        height: auto;
        margin: 15px;
    }
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 900px;
    width: 90%;
    height: auto;
    margin: 20px 0px 0px 0px;
    @media (max-width: 450px) {
        flex-direction: column;
        margin: 30px 0px 30px 0px;
    }
`;

const Live = styled.button`
    font-family: 'Roboto', sans-serif;
    width: 150px;
    height: 50px;
    font-size: 20px;
    letter-spacing: 1px;
    background-color: #4D69FA;
    color: white;
    border-radius: 25px;
    margin: 0px 30px 0px 0px;
    outline: none;
    border: none;
    cursor: pointer;
    @media (max-width: 450px) {
        width: 250px;
        height: 60px;
        margin: 0px 0px 30px 0px;
    }
`;

const Github = styled.button`
    font-family: 'Roboto', sans-serif;
    width: 150px;
    height: 50px;
    font-size: 20px;
    letter-spacing: 1px;
    background-color: #F35421;
    color: white;
    border-radius: 25px;
    margin: 0px;
    outline: none;
    border: none;
    cursor: pointer;
    @media (max-width: 450px) {
        width: 250px;
        height: 60px;
    }
`;

const Line = styled.div`
    width: 90%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 40px 0px 40px 0px;
`;


export default GourmetGames;