import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import two_b from '../images/project_breathe/two_b.png';
import three_g from '../images/gourmet_games/three_g.png';
import tofu from '../images/fresh-dish/tofu2.png';
import audiophile from '../images/home/audiophile_screenshot.png';
import designo from '../images/home/designo_screenshot.png';
import arch_studio from '../images/home/arch_studio_screenshot.png';

function WebScrapers() {
    return (
        <>
                <Line />
            <WebScraperHeader>
            <ScraperHeader>Node JS Web Scrapers</ScraperHeader>
            <ScraperBody>This is some sample text.</ScraperBody>
            </WebScraperHeader>
            <ScraperContainer>
                <Row2Large>
                    <VerticalRow>
                    <RowText>
                        <Heading>Twitter Bot</Heading>
                        <Paragraph>
                        For all your listening needs visit this eccomerce store dedicated to
                    top-notch audio tech.
                        </Paragraph>
                    </RowText>
                    <RowButtons>
                    <RowLink>
                        <Link to="/twitter-bot"><RowButton>Watch Demo</RowButton></Link>
                    </RowLink>
                    </RowButtons>
                    </VerticalRow>
                </Row2Large>
                <Row1Large>
                    <VerticalRow>
                    <RowText>
                        <Heading>Reddit Crawler</Heading>
                        <Paragraph>
                        Check out this design agency for all your design needs. From packaging to websites; they do it all.
                        </Paragraph>
                    </RowText>
                    <RowButtons>
                    <RowLink>
                    <Link to="/reddit-crawler"><RowButton>Watch Demo</RowButton></Link>
                    </RowLink>
                    </RowButtons>
                    </VerticalRow>
                </Row1Large>
                <Row2Large>
                    <VerticalRow>
                    <RowText>
                        <Heading>Instagram Scraper</Heading>
                        <Paragraph>
                        See this architect agency for pristine architecture designs.
                        </Paragraph>
                    </RowText>
                    <RowButtons>
                    <RowLink>
                        <Link to="/instagram-scraper"><RowButton>Watch Demo</RowButton></Link>
                    </RowLink>
                    </RowButtons>
                    </VerticalRow>
                </Row2Large>
                <MobileRow>
                <Heading>Twitter Bot</Heading>
                <Paragraph>
                    For all your listening needs visit this eccomerce store dedicated to
                    top-notch audio tech.
                </Paragraph>
                <RowLink>
                <Link to="/twitter-bot"><RowButton>Watch Demo</RowButton></Link>
                </RowLink>
                </MobileRow>
                <MobileRow>
                <Heading>Reddit Crawler</Heading>
                <Paragraph>
                    Check out this design agency for all your design needs. From packaging to websites; they do it all.
                </Paragraph>
                <RowLink>
                <Link to="/reddit-crawler"><RowButton>Watch Demo</RowButton></Link>
                </RowLink>
                </MobileRow>
                <MobileRow>
                <Heading>Instagram Scraper</Heading>
                <Paragraph>
                    See this architect agency for pristine architecture designs.
                </Paragraph>
                <RowLink>
                <Link to="/instagram-scraper"><RowButton>Watch Demo</RowButton></Link>
                </RowLink>
                </MobileRow>
            </ScraperContainer>
        </>
    );
};

const Line = styled.div`
    width: 90%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 160px 0px -80px 0px;
    @media (max-width: 1025px) {
        margin: 0px 0px 0px 0px;
    }
`;

const WebScraperHeader = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 150px 0px 25px 0px; 
    @media (max-width: 1025px) {
        margin: 100px 0px 50px 0px;
    }
`;

const ScraperHeader = styled.h1`
    position: relative;
    display: block;
    text-align: center;
    font-size: 36px;
    width: 100%;
    height: auto;
    margin: 0px 0px; 
`;

const ScraperBody = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    width: 100%;
    height: auto;
    margin: 15px 0px 30px 0px; 
    @media (max-width: 1025px) {
        margin: 15px 0px 0px 0px;
    }
`;

const ScraperContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
    margin: 0px 0px; 
    @media (max-width: 1025px) {
        flex-direction: column;
    }
`;

const MobileRow = styled.div`
    display: none;
    @media (max-width: 1025px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    margin: 0px 0px 120px 0px;
    }


`;

const Row1Large = styled.div`
    display: flex;
    max-width: 1350px;
    width: calc(100% / 3);
    height: 200px;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 25px 0px 25px 0px;
    @media (max-width: 1025px) {
        display: none;
    }
`;

const Row2Large = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: calc(100% / 3);
    max-width: 1350px;
    height: 200px;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 25px 0px 25px 0;
    @media (max-width: 1025px) {
        display: none;
    }
`;

const RowText = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-left: 10px;
    padding-left: 10px;
    @media (max-width: 1025px) {
        width: 100%;
    }
`;

const Heading = styled.h1`
    position: relative;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    width: 100%;
    font-weight: 400;
    margin-bottom: 15px;
    @media (max-width: 1025px) {
        font-size: 32px;
        width: 60%;
        margin: 7.5px 0px;
        align-self: center;
        padding: 0px 0px 0px 0px;
    }
    @media (max-width: 525px) {
        width: 80%;
    }

`;

const Paragraph = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    width: 100%;
    font-weight: 400;
    @media (max-width: 1025px) {
        line-height: 32px;
        font-size: 22px;
        width: 60%;
        margin: 7.5px 0px;
        align-self: center;
    }
    @media (max-width: 525px) {
        width: 80%;
    }
`;

const VerticalRow = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin: 0px 20px;
`;

const RowButtons = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 11px;
    margin: 30px 20px 20px 10px;
`;

const RowButton = styled.button`
    max-width: 230px;
    width: 230px;
    height: 50px;
    background-color: rgb(15, 15, 15);
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 17px;
    border-radius: 0px;
    text-align: center;
    justify-content: center;
    outline: none;
    border: none;
    //box-shadow: 5px 6px 7px rgba(5, 5, 5, 0.3);
    letter-spacing: 1.5px;
    padding: 1.2rem 3.6rem;
    transition: all 0.5s ease;
    margin: 7.5px 10px;
    cursor: pointer;
    &:hover{
        transform: translate(0px, -7.5px);
    }
    @media (min-width: 1700px) {
        height: 55px;
    }
    @media (max-width: 1025px) {
        margin: 20px 0px 0px 0px;
        width: auto;
        min-width: 200px;
    }
`;

const RowLink = styled(Link) `
    @media (min-width: 1026px) {
        max-width: 500px;
        max-height: 11px;
    }
    @media (max-width: 1025px) {
        width: 60%;
    }
    @media (max-width: 525px) {
        width: 80%;
    }
`;


export default WebScrapers;