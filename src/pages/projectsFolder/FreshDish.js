import React from 'react';
import styled from 'styled-components';
import test from '../../images/test1440.jpg';
import nine_f from '../../images/fresh-dish/nine_f.png';
import nine_ff from '../../images/fresh-dish/nine_ff.png';
import four_f from '../../images/fresh-dish/four_f.png';
import three_f from '../../images/fresh-dish/three_f.png';
import six_f from '../../images/fresh-dish/six_f.png';
import eight_f from '../../images/fresh-dish/eight_f.png';


function FreshDish() {
    return (
    <ProjectContainer>
        <ProjectInnerContainer>
        <ProjectIntro>
            <IntroImage src={nine_ff} alt="project"/>
            <Header>Project Breathe</Header>
            <Paragraph>After the climax of the Covid-19 pandemic, a vaccine was finally made. People were then left wondering when the world would return back to normal.</Paragraph>
        </ProjectIntro>
        <ProjectMain>
                <RowImage src={four_f} alt="test"/>
                <Paragraph>Each state was moving at a different pace with their vaccinations. To get a better idea we decided to fetch data and monitor everything from new daily cases to the vaccination rate.</Paragraph>
                <RowImage src={six_f} alt="test"/>
                <Paragraph>And by charting these key metrics we’ll get a clear understanding of the kind of progress each state is making.</Paragraph>
                <Header>Check Out The Code</Header>
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
    margin: 10px;
`;

const IntroImage = styled.img`
    width: 70%;
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
    margin: 15px 0px 15px 0px;
`;

const RowImage = styled.img`
    max-width: 900px;
    width: 100%;
    height: auto;
    margin: 20px 40px;
    object-fit: cover;
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


export default FreshDish;