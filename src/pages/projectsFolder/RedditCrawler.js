import React from 'react';
import styled from 'styled-components';
import RedditCrawlerVideo from '../../videos/reddit_scraper.mp4';
import { motion } from "framer-motion";
import { fadeIn } from "../../animation";

function RedditCrawler() {
    return (
        <motion.div variants={fadeIn} initial="hidden" animate="show">
        <ProjectContainer>
            <ProjectInnerContainer>
            <ProjectIntro>
            <VideoContainer>
            <Video width="1920" height="1080" src={RedditCrawlerVideo} />
            </VideoContainer>
                <Header>Reddit Crawler</Header>
                <Paragraph>After the climax of the Covid-19 pandemic, a vaccine was finally made. This was a pivotal moment in history since it meant that the world would soon go back to normal.</Paragraph>
            </ProjectIntro>
            <ProjectMain>
                    <Paragraph>Each state was moving at a different pace with their vaccinations. To get a better idea of the progress I decided to fetch data and monitor crucial metrics like new daily cases and the vaccination rate.
    </Paragraph>
                    <Paragraph>This is a react app that leverages Material-UI’s cards and grid library that creates a neat and responsive layout.  Data is updated daily and fetched from the Covid Act Now API and is then presented on charts (created with the Recharts library) so users can better understand the trend.</Paragraph>
                    <Paragraph>I chose to use the Recharts library for charting the data (it was much easier to use than Material-UI charts).</Paragraph>
                    <Paragraph>The app gives users quick access to new daily data for all fifty states. Data is automatically presented on charts so users can visually see the trends and nine key metrics are collected daily to determine the rate of progress.</Paragraph>
                    <Paragraph>This was a very simple, one-page card layout of crucial data metrics from all fifty of the states, and memory was managed simply by using the default React hooks.</Paragraph>
                    <Line />
                    <Header>Check Out The Code</Header>
                    <Paragraph>You can view the live app as well as my code on github below.</Paragraph>
                    <Links>
                    <a href="https://designo-sooty.vercel.app/" target="_blank"><Live>Live</Live></a>
                    <a href="https://github.com/adis-tek/designo" target="_blank"><Github>Github</Github></a>
                    </Links>
            </ProjectMain>
            </ProjectInnerContainer>
        </ProjectContainer>
    </motion.div>
    )
}

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 75%;
  padding-top: 42.5%;
  margin: 0px 0px 70px 0px;
  @media (max-width: 1025px) {
    width: 90%;
    padding-top: 51%;
}
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

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
    margin: 10px;
`;

const IntroImage = styled.img`
    max-width: 1000px;
    width: 90%;
    height: auto;
    margin: 40px 50px 60px 50px;
    object-fit: cover;
    @media (max-width: 1025px) {
        width: 105%;
        margin: 0px 50px 20px 50px;
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
    @media (max-width: 1025px) {
        width: 110%;
        margin: 20px 50px 20px 50px;
    }
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

export default RedditCrawler;
