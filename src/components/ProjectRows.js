import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import two_b from '../images/project_breathe/two_b.png';
import three_g from '../images/gourmet_games/three_g.png';
import tofu from '../images/fresh-dish/tofu2.png';

function ProjectRows() {
    return (
        <>
            <RowContainer>
                <Row1>
                    <RowImageContainer>
                    <RowImage src={two_b} />
                    </RowImageContainer>
                    <VerticalRow>
                    <RowText>
                        <TextBoxHeading>Presentation is Everything</TextBoxHeading>
                        <TextBoxParagraph>
                            An app that helps users understand complex Covid-19 data.
                        </TextBoxParagraph>
                    </RowText>
                    <RowButtons>
                    <RowLink>
                        <Link to="/project-breathe"><RowButton>Take a look</RowButton></Link>
                    </RowLink>
                    </RowButtons>
                    </VerticalRow>
                </Row1>
                <Row2>
                    <RowImageContainer>
                    <RowImage src={three_g} />
                    </RowImageContainer>
                    <VerticalRow>
                    <RowText>
                        <TextBoxHeading>Play Something New</TextBoxHeading>
                        <TextBoxParagraph>
                            Gamers don't have the time to find new titles, that's
                            why I made an app that finds new games for you.
                        </TextBoxParagraph>
                    </RowText>
                    <RowButtons>
                    <RowLink>
                    <Link to="/gourmet-games"><RowButton>Take a look</RowButton></Link>
                    </RowLink>
                    </RowButtons>
                    </VerticalRow>
                </Row2>
                <Row1>
                    <RowImageContainer>
                    <RowImage2 src={tofu} />
                    </RowImageContainer>
                    <VerticalRow>
                    <RowText>
                        <TextBoxHeading>Find New Recipes</TextBoxHeading>
                        <TextBoxParagraph>
                            You won't have to worry about eating the same thing over
                            and over. Now you can pick a random recipe to try without looking through
                            cook books.
                        </TextBoxParagraph>
                    </RowText>
                    <RowButtons>
                    <RowLink>
                    <Link to="/fresh-dish"><RowButton>Take a look</RowButton></Link>
                    </RowLink>
                    </RowButtons>
                    </VerticalRow>
                </Row1>
                <MobileRow>
                <RowImage src={two_b} />
                <TextBoxHeading>Presentation is Everything</TextBoxHeading>
                <TextBoxParagraph>
                    An app that helps users understand complex Covid-19 data.
                </TextBoxParagraph>
                <RowLink>
                <Link to="/project-breathe"><RowButton>Take a look</RowButton></Link>
                </RowLink>
                </MobileRow>
                <MobileRow>
                <RowImage src={three_g} />
                <TextBoxHeading>Play Something New</TextBoxHeading>
                    <TextBoxParagraph>
                    Gamers don't have the time to find new titles, that's
                    why I made an app that finds new games for you.
                    </TextBoxParagraph>
                <RowLink>
                <Link to="/gourmet-games"><RowButton>Take a look</RowButton></Link>
                </RowLink>
                </MobileRow>
                <MobileRow>
                <RowImage2 src={tofu} />
                <TextBoxHeading>Find New Recipes</TextBoxHeading>
                <TextBoxParagraph>
                    You won't have to worry about eating the same thing over
                    and over. Now you can pick a random recipe to try without looking through
                    cook books.
                </TextBoxParagraph>
                <RowLink>
                <Link to="/fresh-dish"><RowButton>Take a look</RowButton></Link>
                </RowLink>
                </MobileRow>
            </RowContainer>
        </>
    );
};

const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0px 0px; 
`;

const MobileRow = styled.div`
    display: none;
    @media (max-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 120px 0px;
    }


`;

const Row1 = styled.div`
    display: flex;
    max-width: 1350px;
    width: 100%;
    height: 400px;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 150px 0px 150px 0px;
    @media (max-width: 1025px) {
        display: none;
        flex-direction: column;
        height: 700px;
        margin: 0px 0px 50px 0px;
    }
    @media (max-width: 800px) {
        height: 600px;
    }
    @media (max-width: 700px) {
        height: 600px;
    }
    @media (max-width: 600px) {
        height: 550px;
    }
    @media (max-width: 475px) {
        height: 500px;
    }
`;

const Row2 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    max-width: 1350px;
    height: 400px;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 40px 0px 60px 0;
    @media (max-width: 1025px) {
        display: none;
        flex-direction: column;
        height: 700px;
        margin: 0px 0px 50px 0px;
    }
    @media (max-width: 800px) {
        height: 600px;
    }
    @media (max-width: 700px) {
        height: 600px;
    }
    @media (max-width: 600px) {
        height: 550px;
    }
    @media (max-width: 475px) {
        height: 500px;
    }
`;

const RowImageContainer = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    height: 30;
    margin: 0 20px;
    @media (max-width: 1025px) {
        margin: 0px 0px;
        width: 100%;
    }
`;

const RowImage = styled.img`
    display: flex;
    max-width: 800px;
    width: 100%;
    align-items: center;
    height: auto;
    @media (max-width: 1025px) {
        width: 98%;
        margin: 0px 0px 40px 0px;
    }
    @media (max-width: 700px) {
        width: 98%;
    }
`;

const RowImage2 = styled.img`
    display: flex;
    max-width: 900px;
    width: 85%;
    align-items: center;
    height: auto;
    @media (max-width: 1025px) {
        width: 80%;
        margin: 40px 0px;
    }
    @media (max-width: 700px) {
        width: 95%;
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

const TextBoxHeading = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
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

const TextBoxParagraph = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
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
    width: 30%;
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
        width: 50%;
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


export default ProjectRows;