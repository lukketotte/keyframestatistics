import React from 'react';
import styled from 'styled-components';

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

const HeaderImg = styled.img`
  max-width: 16em;
  min-width: 12em;
  margin-top: 3em;
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
      <HeaderImg src={logoWhite} />
      <SubHeader width={width}>
        Augmenting the exploration and utilization of data
      </SubHeader>
    </HeaderDiv>
  );
};

export default Header;