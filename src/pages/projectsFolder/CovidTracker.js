import React from 'react';
import styled from 'styled-components';
import test from '../../images/test1440.jpg';
import one_b from '../../images/one_b.png';
import two_b from '../../images/two_b.png';
import three_b from '../../images/three_b.png';
import four_b from '../../images/four_b.png';

function CovidTracker() {
    return (
        <>
        <ProjectIntro>
            <IntroImage src={four_b} alt="project"/>
            <h1>The Project of The Century</h1>
            <p>Testing this intro to the project that will be discussed below.</p>
        </ProjectIntro>
            <ProjectTextLeft>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <RowImage src={one_b} alt="test"/>
                </PhotoColumn>
            </ProjectTextLeft>
            <ProjectTextRight>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <RowImage src={two_b} alt="test"/>
                </PhotoColumn>
            </ProjectTextRight>
            <ProjectTextLeft>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <RowImage src={three_b} alt="test"/>
                </PhotoColumn>
            </ProjectTextLeft>
            <ProjectTextCenter>
                <TextColumn>
                <h1>I Am a Heading Dude</h1>
                <p>Testing this text out over here dawg</p>
                </TextColumn>
            </ProjectTextCenter>
        </>
    );
};

const ProjectIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    h1 {
        font-size: 26px;
        margin: 10px;
    }
    p {
        font-size: 18px;
        margin: 10px;
    }

`;

const IntroImage = styled.img`
    width: 70vw;
    height: auto;
    margin: 50px;
`;

const RowImage = styled.img`
    width: 60vw;
    height: auto;
`;

const ProjectTextLeft = styled.div`
    display: flex;
    height: 80vh;
`;

const ProjectTextRight = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 80vh;
`;

const ProjectTextCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
`;

const TextColumn = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin: 15px;
    }
`;

const PhotoColumn = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const Link = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
`;


export default CovidTracker;