import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  src: string;
  name: string;
}

const LogoImg = styled.img`
  height: 100px;
  width: 150px;
`;

const Logo = ({ src, name }: LogoProps) => {
  return (
    <div>
      {name}
      <LogoImg src={src}></LogoImg>
    </div>
  );
};

export default Logo;
