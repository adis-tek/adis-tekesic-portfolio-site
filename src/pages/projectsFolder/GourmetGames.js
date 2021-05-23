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
                <Header>Project Breathe</Header>
                <Paragraph>After the climax of the Covid-19 pandemic, a vaccine was finally made. People were then left wondering when the world would return back to normal.</Paragraph>
            </ProjectIntro>
            <ProjectMain>
                    <Paragraph>Each state was moving at a different pace with their vaccinations. To get a better idea we decided to fetch data and monitor everything from new daily cases to the vaccination rate.</Paragraph>
                    <RowImage src={three_g} alt="test"/>
                    <Paragraph>And by charting these key metrics we’ll get a clear understanding of the kind of progress each state is making.</Paragraph>
                    <CTA>Check Out The Code</CTA>
                    <Paragraph>You can view the live app as well as my code on github below.</Paragraph>
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
    max-width: 800px;
    width: 90%;
    @media (max-width: 1025px) {
        font-size: 35px;
        margin: 25px 0px 0px 0px;
    }
`;

const CTA = styled.h1`
    font-size: 40px;
    font-weight: 500;
    max-width: 800px;
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
    max-width: 800px;
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


export default GourmetGames;