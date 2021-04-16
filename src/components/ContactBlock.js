import React from 'react';
import styled from 'styled-components';

function ContactBlock() {
    return (
        <>
        <ContactBlockContainer>
        <h3>LOGO</h3>
        <h3>Built in react with redux.</h3>
        <h3>Icons</h3>
        <h3>Developed by Adis Tekesic</h3>
        </ContactBlockContainer>
        </>
    )
}

const ContactBlockContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    h3 {
        margin: 20px;
        width: 80%;
        color: #444444;
    }
    p {
        margin: 20px;
        width: 80%;
        color: #6B6B6B;
    }
    background-color: #F5F5F7;
    //#3EA6FF //#3ECCFF
`;

export default ContactBlock;
