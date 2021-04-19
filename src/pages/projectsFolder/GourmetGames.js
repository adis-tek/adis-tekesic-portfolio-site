import React from 'react';
import styled from 'styled-components';
import test from '../../images/test1440.jpg';
import one_g from '../../images/one_g.png';
import two_g from '../../images/two_g.png';
import three_g from '../../images/three_g.png';
import four_g from '../../images/four_g.png';

function CovidTracker() {
    return (
        <>
        <ProjectIntro>
            <IntroImage src={one_g} alt="project"/>
            <h1>The Project of The Century</h1>
            <p>Testing this intro to the project that will be discussed below.</p>
        </ProjectIntro>
        <ProjectTextRight>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <RowImage src={two_g} alt="test"/>
                </PhotoColumn>
            </ProjectTextRight>
            <ProjectTextLeft>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <RowImage src={three_g} alt="test"/>
                </PhotoColumn>
            </ProjectTextLeft>
            <ProjectTextRight>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <RowImage src={four_g} alt="test"/>
                </PhotoColumn>
            </ProjectTextRight>
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