import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const  Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
        <div>
            <h1>
                <Link id="logo" to="/">
                    Adis Tekesic
                </Link>
            </h1>
        </div>
        <div>
        <ul>
            <li>
                <Link to="/projects">
                    Projects
                </Link>
            </li>
        </ul>
        </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 3vh;
    max-height: 3vh;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: white;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
        font-family: 'Rubik';
        letter-spacing: 1.25px;
        color: #BABABA;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Rubik", sans-serif;
        font-weight: lighter;
    }
    li {
        padding: 2rem;
        margin: 1rem;
        border-radius: 10%;
        position: relative;

    }
    /*
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
        padding: 0;
      }
    }
    */
`;

export default Nav;