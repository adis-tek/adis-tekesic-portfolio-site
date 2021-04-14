import React from 'react';
import styled from 'styled-components';
import test from '../images/test1440.jpg';

function ProjectRows() {
    return (
        <>
            <RowContainer>
                <Row1>
                    <RowImage src={test} alt="test" />
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
                <Row2>
                    <RowImage src={test} alt="test" />
                    <VerticalRow>
                    <RowText>
                        <h1>Track Covid<br />& Avoid It</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ab deserunt ipsa ipsum labore, illum sunt explicabo voluptatem a itaque soluta quidem nisi laboriosam eligendi hic quod, omnis tenetur incidunt?</p>
                    </RowText>
                    <RowButtons>
                        <button href="/projects/covid-tracker">Read more about this one</button>
                    </RowButtons>
                    </VerticalRow>
                </Row2>
                <Row1>
                    <RowImage src={test} alt="test" />
                    <VerticalRow>
                    <RowText>
                        <h1>Track Covid<br />& Avoid It</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ab deserunt ipsa ipsum labore, illum sunt explicabo voluptatem a itaque soluta quidem nisi laboriosam eligendi hic quod, omnis tenetur incidunt?</p>
                    </RowText>
                    <RowButtons>
                        <button href="/projects/covid-tracker">Read more about this one</button>
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
    height: 40vh;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;

`;

const RowImage = styled.img`
    width: 450px;
    height: auto;
    margin: 30px;

`;

const RowText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    h1 {
        font-family: "Lato", sans-serif;
        font-size: 2rem;
        width: 70%;
    }
    p {
        font-family: "Gothic A1", sans-serif;
        font-size: 1rem;
        width: 70%;
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
    button {
        border-radius: 20px;
        color: black;
        background-color: white;
        border: 1px solid blue;
    }
`;

const Row2 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 40vh;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
`;

export default ProjectRows;