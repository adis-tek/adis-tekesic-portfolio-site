import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import disableScroll from 'disable-scroll';
import wp from '../pdf/Exacaster_Telco_White_Paper.pdf';

const  Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDisabled, setScrollDisabled] = useState(true);
      function MenuToggle() {
        setIsOpen(state => !state);
        setScrollDisabled(state => !state);
        if (scrollDisabled == true) {
            disableScroll.on();
        } else {
            disableScroll.off();
        }
      }

    return (
    <Navigation>
        {!isOpen &&
        <>
        <MobileNav>
        <Logo>
            <Link id="logo" to="/">
                Adis Tekesic
            </Link>
        </Logo>
        <NavSvg
        onClick = {MenuToggle}
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" />
            <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" />
            <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" 
            fill="currentColor"/></NavSvg>
        </MobileNav>
        </>
        }
    {isOpen &&
        <Menu>
            <XContainer onClick={MenuToggle}><SvgX
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            /></SvgX>
            </XContainer>
            <MenuInnerContainer>
            <Link onClick={MenuToggle} to="about"><MenuItem>ABOUT</MenuItem></Link>
            <Link onClick={MenuToggle} to="contact"><MenuItem>CONTACT</MenuItem></Link>
            <a onClick={MenuToggle} href={wp}><MenuItem>RESUME</MenuItem></a>
            </MenuInnerContainer>
        </Menu>
    } 
    <DesktopMenu>
        <Logo>
            <Link id="logo" to="/">
                Adis Tekesic
            </Link>
        </Logo>
        <ul>
            <li>
                <Link id="li" to="/about">
                    About
                </Link>
            </li>
            <li>
                <Link id="li" to="/contact">
                    Contact
                </Link>
            </li>
            <li>
                <a id="li" href={wp}>
                    Resume
                </a>
            </li>
        </ul>

    </DesktopMenu>

    </Navigation>
    );
};

const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100px;
    margin: 20px 0px;
    ul {
        position: relative;
        display: flex;
        list-style: none;
        margin: 0px 50px 0px 0px;
        @media (max-width: 1000px) {
        display: none;
    }
    }
    li {
        text-decoration: none;
        font-family: 'Rubik';
        letter-spacing: 1.25px;
        color: #BABABA;
        padding: 0rem 2rem 0rem 2rem;
        margin: 0.5rem 1rem 0.5rem 1rem;
        border-radius: 10%;
        position: relative;
        color: rgb(5, 5, 5);
        right: 0px;
        font-size: 32px;
        
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1026px) {
        margin: 0px 0px 0px 50px;
    }
    a {
        font-size: 1.5rem;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size : 40px;
        @media (max-width: 335px) {
        font-size: 32px;
    }
    }
    @media (max-width: 1025px) {
        height: 50px;
        padding: 4rem 6rem;
    }
    @media (min-width: 475px) and (max-width: 750px) {
        margin: 0px 0px 0px -20px;
    }
    @media (max-width: 475px) {
        height: 50px;
        padding: 4rem 4rem;
    }
    @media (max-width: 387px) {
        height: 50px;
        padding: 4rem 2rem;
    }
`;

const MobileNav = styled.div`
    display: none;
    @media screen and (max-width: 1025px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: white;
    z-index: 3;
`;

const MenuInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`;

const MenuItem = styled.h2`
    font-size: 50px;
    width: 300px;
    margin-bottom: 90px;
    color: rgb(5, 5, 5);
    transition: all .3s ease-out;
    cursor: pointer;
    letter-spacing: 1.5px;
    text-align: center;
    @media (max-width: 450px) {
        font-size: 45px;
        margin: 0px 0px 70px 0px;
    }
    @media (max-width: 350px) {
        margin: 0px 0px 70px 0px;
    }
`;

const DesktopMenu = styled.div`
    display: none;
    @media (min-width: 1026px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`;

const NavSvg = styled.svg `
  width: 52px;
  height: 52px;
  margin: 0px 30px 0px 0px;
  right: 0;
  @media (min-width: 500px) {
        margin: 0px 50px 0px 0px;
    }
  @media (max-width: 475px) {
        width: 42px;
        height: 42px;
    }
    @media (max-width: 375px) {
        margin: 0px 20px 0px 0px;
    }
`;

const XContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const SvgX = styled.svg`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  margin-right: 40px;
  @media (max-width: 350px) {
      margin: 0px 20px 5px 0px;
    }
`;

export default Nav;