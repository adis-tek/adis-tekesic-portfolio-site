import React from 'react';
import styled from 'styled-components';
import FreshDishVideo from '../../videos/fresh_dish_desktop.mp4';
import FreshDishVideoMobile from '../../videos/fresh_dish_mobile.mp4';
import { motion } from "framer-motion";
import { fadeIn } from "../../animation";


function FreshDish() {
    return (
    <motion.div variants={fadeIn} initial="hidden" animate="show">
        <ProjectContainer>
            <ProjectInnerContainer>
            <ProjectIntro>
            <VideoContainer>
            <Video width="1920" height="1080" src={FreshDishVideo} />
            </VideoContainer>
                <IntroHeader>Fresh Dish</IntroHeader>
                <Paragraph>Cooking the same meals throughout the week can get boring. Fresh Dish is designed to randomly select a recipe for you based on the ingredient you select.</Paragraph>
                <Paragraph>You’ll never run out of things to cook since new recipes are just a tap away. The recipes come from the TheMealDB API and the app will use a random number as a way to select a random recipe in the ingredient category.</Paragraph>
            </ProjectIntro>
            <ProjectMain>
                    <Paragraph>When you find the recipes you want to try, simply add them to your favorites for reference. The favorites page can only be viewed when you’re logged in.</Paragraph>
                    <Paragraph>The way the app handles authentication is through Firebase and the way the app saves recipes is by using FireStore from Firebase (a lightweight database).</Paragraph>
                    <VideoContainerMobile>
                    <VideoMobile width="1080" height="1920" src={FreshDishVideoMobile} />
                    </VideoContainerMobile>
                    <Paragraph>Along with an interactive and responsive design created using styled components, the app is extremely interactive and responsive on all mobile devices.</Paragraph>
                    <Line />
                    <Header>Check Out The Code</Header>
                    <Paragraph>You can view the live app as well as my code on github below.</Paragraph>
                    <Links>
                    <a href="https://fresh-dish.vercel.app/" target="_blank"><Live>Live</Live></a>
                    <a href="https://github.com/adis-tek/fresh-dish" target="_blank"><Github>Github</Github></a>
                    </Links>
            </ProjectMain>
            </ProjectInnerContainer>
        </ProjectContainer>
    </motion.div>
    );
};

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

const VideoContainerMobile = styled.div`
  position: relative;
  overflow: hidden;
  width: 24%;
  padding-top: 42.5%;
  margin: 40px 0px 40px 0px;
  @media (max-width: 1025px) {
    width: 24%;
    padding: 44% 25% 44% 25%;
    margin: 40px 0px 40px 0px;
}
@media (max-width: 650px) {
    width: 24%;
    padding: 80% 45% 80% 45%;
    margin: 40px 0px 40px 0px;
}
`;

const VideoMobile = styled.iframe`
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
    margin: 0px;
`;

const IntroImage = styled.img`
    max-width: 1000px;
    width: 70%;
    height: auto;
    margin: 40px 50px;
    object-fit: cover;
    @media (max-width: 1025px) {
        width: 95%;
        margin: 0px 50px;
    }
`;

const IntroHeader = styled.h1`
    font-size: 40px;
    font-weight: 500;
    max-width: 900px;
    width: 90%;
    margin: 0px 0px 10px 0px;
    @media (max-width: 1025px) {
        font-size: 35px;
        margin: 25px 0px 0px 0px;
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
    max-width: 1000px;
    width: 100%;
    height: auto;
    margin: 20px 40px;
    object-fit: cover;
`;

const VerticalImage = styled.img`
    max-width: 1000px;
    width: 70%;
    height: auto;
    margin: 40px 40px;
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


export default FreshDish;