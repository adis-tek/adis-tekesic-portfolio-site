import React from 'react';
import styled from 'styled-components';
import test from '../images/test1440.jpg';

function Projects() {
    return (
        <>
            <ProjectTextLeft>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <img src={test} alt="test"/>
                    <img src={test} alt="test"/>
                </PhotoColumn>
            </ProjectTextLeft>
            <ProjectTextRight>
                <TextColumn>
                    <h1>I Am a Heading Dude</h1>
                    <p>Testing this text out over here dawg</p>
                </TextColumn>
                <PhotoColumn>
                    <img src={test} alt="test"/>
                    <img src={test} alt="test"/>
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

`;

const ProjectTextLeft = styled.div`
    display: flex;
`;

const ProjectTextRight = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const ProjectTextCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        margin: 15px;
        width: 500px;
        height: auto;
    }
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

export default Projects;
