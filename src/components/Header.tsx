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
  image: string;
};

const HeaderDiv = styled.header<HeaderDivProps>`
  height: 600px;
  background-image: ${(props) => `url(${props.image})`};
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 150px;
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
  font-size: 20px;
  margin-right: 1em;
  &:hover {
    color: white;
  }
`;

const HeaderImg = styled.img`
  width: 18em;
  margin-left: 2em;
  @media (max-width: 767px) {
    width: 13em;
  }
`;

type H1props = {
  width: number;
};

const SubHeader = styled.h1<H1props>`
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
    <HeaderDiv image={setSize(width)}>
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
