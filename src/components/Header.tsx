import React from 'react';
import styled from 'styled-components';
import ContactButton from './ContactButton';
import BurgerButton from './BurgerButton';

import backgroundLg from '../media/splash-lg.png';
import backgroundSm from '../media/splash-sm.png';
import backgroundMd from '../media/splash-md.png';
import backgroundXl from '../media/splash-xl.png';
import logoWhite from '../media/logo-white.svg';

const breakpoints = {
  sm: 767,
  md: 1024,
  lg: 1440,
};

type HeaderDivProps = {
  xl: string;
  lg: string;
  md: string;
  sm: string;
};

/* Image sizes:
- Splash-lg:  1280  ×  640
- Splash-md: 1280  ×  1280
- Splash-sm: 720  ×  960
- Splash-xl: 1920  ×  720
*/

const HeaderDiv = styled.header<HeaderDivProps>`
  @media (max-width: 767px) {
    background-image: ${(props) => `url(${props.sm})`};
  }

  background-image: ${(props) => `url(${props.lg})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;

  @media (min-width: 1024px) {
    background-image: ${(props) => `url(${props.lg})`};
  }

  @media (min-width: 1440px) {
    background-image: ${(props) => `url(${props.xl})`};
  }
`;

const LinkDiv = styled.div`
  margin-left: calc(100vw - 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100px;
  top: 0;
  background-image: linear-gradient(
    to bottom,
    #1f1f1f 7%,
    rgba(31, 31, 31, 0.64) 54%,
    rgba(31, 31, 31, 0.34) 79%,
    rgba(31, 31, 31, 0)
  );
`;

const UlDiv = styled.div`
  margin-left: auto;
  margin-right: 2em;
`;

const HeaderLink = styled.a`
  color: lightgray;
  text-decoration: none;
  font-size: 18px;
  margin-right: 1em;
  z-index: 10;
  &:hover {
    color: white;
  }
`;

const HeaderImg = styled.img`
  width: 16em;
  margin-left: 2em;
  @media (max-width: 767px) {
    width: 13em;
  }
`;

type H1props = {
  width: number;
};

const SubHeader = styled.h1<H1props>`
  margin-left: calc(100vw - 100%);
  margin-right: 0;
  max-width: 70%;
  color: white;
  margin-top: ${(props) =>
    function (p) {
      if (p.width < breakpoints.sm) {
        return '11em';
      } else if (p.width < breakpoints.md) {
        return '9em';
      } else {
        return '5em';
      }
    }};
  text-align: center;
  font-weight: 100;
  font-size: ${(props) =>
    function (p) {
      if (p.width < breakpoints.sm) {
        return '25px';
      } else if (p.width < breakpoints.md) {
        return '30px';
      } else {
        return '50px';
      }
    }};
`;

const setSize = (size: number) => {
  if (size < breakpoints.sm) {
    return backgroundSm;
  } else if (size < breakpoints.md) {
    return backgroundMd;
  } else if (size < breakpoints.lg) {
    return backgroundLg;
  } else {
    return backgroundXl;
  }
};

interface HeaderProps {
  width: number;
}

const Header = ({ width }: HeaderProps) => {
  return (
    <HeaderDiv
      xl={backgroundXl}
      md={backgroundMd}
      sm={backgroundSm}
      lg={backgroundLg}
    >
      <LinkDiv>
        <HeaderImg src={logoWhite} />
        {width > breakpoints.sm ? (
          <UlDiv>
            <HeaderLink href='#'>Work</HeaderLink>
            <HeaderLink href='#'>About</HeaderLink>
            <ContactButton>Contact us</ContactButton>
          </UlDiv>
        ) : (
          <BurgerButton />
        )}
      </LinkDiv>
      <SubHeader width={width}>
        Augmenting the exploration and utilization of data
      </SubHeader>
    </HeaderDiv>
  );
};

export default Header;
