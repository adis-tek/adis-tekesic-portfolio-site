import React from 'react';
import styled from 'styled-components';
import test from '../../images/test1440.jpg';

function CovidTracker() {
    return (
        <>
            <Project1>
                <ProjectText>
                    <h1>Test Test</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus, earum nam autem placeat labore animi, alias exercitationem tempora libero consectetur eos sit qui optio accusantium quibusdam expedita officiis illo.</p>
                </ProjectText>
                <ProjectImages>
                    <ProjectImage src={test} />
                    <ProjectImage src={test} />
                </ProjectImages>
            </Project1>
            <Project2>
                <ProjectText>
                    <h1>Test Test</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus, earum nam autem placeat labore animi, alias exercitationem tempora libero consectetur eos sit qui optio accusantium quibusdam expedita officiis illo.</p>
                </ProjectText>
                <ProjectImages>
                    <ProjectImage src={test} />
                    <ProjectImage src={test} />
                </ProjectImages>
            </Project2>
            <GitHub>

            </GitHub>

        </>
    );
};

const Project1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProjectImages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProjectImage = styled.img`
    width: 300px;
    height: auto;
`;


const Project2 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
`;

const GitHub = styled.div`
    
`;



export default CovidTracker;