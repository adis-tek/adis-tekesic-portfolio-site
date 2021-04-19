import React from 'react';
import styled from 'styled-components';
import test from '../images/test1440.jpg';
import two_b from '../images/two_b.png';
import one_g from '../images/one_g.png';
import two_m from '../images/two_m.png';

function ProjectRows() {
    return (
        <>
            <RowContainer>
                <Row1>
                    <RowImage src={two_b} alt="test" />
                    <VerticalRow>
                    <RowText>
                        <h1>Track Covid & Avoid It</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ab deserunt ipsa ipsum labore, illum sunt explicabo voluptatem a itaque soluta quidem nisi laboriosam eligendi hic quod, omnis tenetur incidunt?</p>
                    </RowText>
                    <RowButtons>
                        <button href="/projects/covid-tracker">See this project</button>
                    </RowButtons>
                    </VerticalRow>
                </Row1>
                <Row2>
                    <RowImage src={one_g} alt="test" />
                    <VerticalRow>
                    <RowText>
                        <h1>Track Covid<br />& Avoid It</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ab deserunt ipsa ipsum labore, illum sunt explicabo voluptatem a itaque soluta quidem nisi laboriosam eligendi hic quod, omnis tenetur incidunt?</p>
                    </RowText>
                    <RowButtons>
                        <button href="/projects/covid-tracker">See this project</button>
                    </RowButtons>
                    </VerticalRow>
                </Row2>
                <Row1>
                    <RowImage src={two_m} alt="test" />
                    <VerticalRow>
                    <RowText>
                        <h1>Track Covid<br />& Avoid It</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ab deserunt ipsa ipsum labore, illum sunt explicabo voluptatem a itaque soluta quidem nisi laboriosam eligendi hic quod, omnis tenetur incidunt?</p>
                    </RowText>
                    <RowButtons>
                        <button href="/projects/covid-tracker">See this project</button>
                    </RowButtons>
                    </VerticalRow>
                </Row1>
            </RowContainer>
        </>
    );
};

const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vw;
    margin: 10px;
    padding: 10px;

`;

const RowImage = styled.img`
    max-width: 60vw;
    height: auto;
    margin: 30px;

`;

const RowText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: "Lato", sans-serif;
        font-size: 3rem;
        width: 70%;
        margin: 10px;
    }
    p {
        font-family: "Gothic A1", sans-serif;
        font-size: 1.75rem;
        width: 70%;
        margin: 10px;
    }
`;

const VerticalRow = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    margin: 30px;
`;

const Row2 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 40vw;
    margin: 10px;
    padding: 10px;
`;

export default ProjectRows;