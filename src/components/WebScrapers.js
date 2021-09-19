import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function WebScrapers() {
    return (
        <>
            <Line />
            <WebScraperHeader>
            <ScraperHeader>Back-End Node Apps</ScraperHeader>
            <ScraperBody>A few scrapers and a bot written in Node JS.</ScraperBody>
            </WebScraperHeader>
            <ScraperContainer>
                <Row2Large>
                    <VerticalRow>
                    <RowText>
                        <Heading>Twitter Bot</Heading>
                        <Paragraph>
                        This is a Node JS project that utilizes the Twitter API and Google Spreadsheets to tweet quotes from a spreadsheet.
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
                        This is a Reddit bot that takes in a reddit URL and indexes all of the Reddit comments by the amount of upvotes from most to least (and sorts them in a Google spreadsheet).
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
                        This is a Node JS bot that takes an Instagram URL and returns the profile’s stats.
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
                This is a Node JS project that utilizes the Twitter API and Google Spreadsheets to tweet quotes from a spreadsheet.
                </Paragraph>
                <RowLink>
                <Link to="/twitter-bot"><RowButton>Watch Demo</RowButton></Link>
                </RowLink>
                </MobileRow>
                <MobileRow>
                <Heading>Reddit Crawler</Heading>
                <Paragraph>
                This is a Reddit bot that takes in a reddit URL and indexes all of the Reddit comments by the amount of upvotes from most to least (and sorts them in a Google spreadsheet).
                </Paragraph>
                <RowLink>
                <Link to="/reddit-crawler"><RowButton>Watch Demo</RowButton></Link>
                </RowLink>
                </MobileRow>
                <MobileRow>
                <Heading>Instagram Scraper</Heading>
                <Paragraph>
                This is a Node JS bot that takes an Instagram URL and returns the profile’s stats.
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
    max-width: 1350px;
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
    width: 80%;
    height: auto;
    margin: 150px 0px 25px 0px; 
    @media (max-width: 1025px) {
        margin: 100px 0px 50px 0px;
    }
    @media (max-width: 525px) {
    margin: 75px 0px 25px 0px;
    }
    @media (max-width: 350px) {
    margin: 75px 0px 35px 0px;
    }
`;

const ScraperHeader = styled.h1`
    position: relative;
    display: block;
    text-align: center;
    font-size: 40px;
    width: 100%;
    height: auto;
    margin: 0px 0px; 
    @media (max-width: 525px) {
    text-align: left;
    width: 100%;
    }
`;

const ScraperBody = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    width: 100%;
    height: auto;
    margin: 15px 0px 30px 0px; 
    @media (max-width: 1025px) {
        margin: 15px 0px 0px 0px;
    }
    @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-align: center;
    width: 100%;
    }
    @media (max-width: 525px) {
    align-items: flex-start;
    font-size: 24px;
    text-align: left;
    width: 100%;
    }
    @media (max-width: 350px) {
    font-size: 22px;
    }
`;

const ScraperContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1350px;
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
    width: 70%;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    margin: 0px 0px 40px 0px;
    }
    @media (max-width: 525px) {
    width: 100%;
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
    text-align: center;
    font-weight: 400;
    margin-bottom: 15px;
    @media (max-width: 1025px) {
        font-size: 40px;
        width: 100%;
        margin: 7.5px 0px;
        text-align: center;
        align-self: center;
        padding: 0px 0px 0px 0px;
    }
    @media (max-width: 525px) {
        text-align: left;
        width: 80%;
    }
    @media (max-width: 350px) {
    font-size: 28px;
    }

`;

const Paragraph = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    width: 100%;
    text-align: center;
    line-height: 32px;
    font-weight: 400;
    @media (max-width: 1025px) {
        line-height: 38px;
        font-size: 18px;
        text-align: center;
        width: 75%;
        margin: 7.5px 0px;
        align-self: center;
    }
    @media (max-width: 525px) {
        text-align: left;
        width: 80%;
    }
    @media (max-width: 350px) {
    font-size: 16px;
    }
`;

const VerticalRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    width: 100%;
    margin: 0px 20px;
`;

const RowButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 11px;
    margin: 0px 0px 0px 0px;
`;

const RowButton = styled.button`
    position: relative;
    display: flex;
    width: 230px;
    height: 50px;
    background-color: rgb(15, 15, 15);
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 17px;
    border-radius: 0px;
    text-align: center;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    //box-shadow: 5px 6px 7px rgba(5, 5, 5, 0.3);
    letter-spacing: 1.5px;
    padding: 1.2rem 3.6rem;
    transition: all 0.5s ease;
    margin: 75px 0px 0px 20px;
    cursor: pointer;
    &:hover{
        transform: translate(0px, -7.5px);
    }
    @media (min-width: 1700px) {
        padding: 0rem;
    }
    @media (max-width: 1025px) {
        margin: 20px 0px 0px 0px;
        width: auto;
        min-width: 200px;
    }
`;

const RowLink = styled(Link) `
    @media (min-width: 1026px) {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 500px;
        max-height: 11px;
        align-items: center;
        justify-content: center;
        align-self: center;
    }
    @media (max-width: 1025px) {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 60%;
    }
    @media (max-width: 525px) {
        align-items: flex-start;
        justify-content: flex-start;
        width: 80%;
    }
`;


export default WebScrapers;