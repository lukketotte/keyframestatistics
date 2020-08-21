import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import clients from '../constants/clients/clients.json';

import epiceats from '../media/prevclients/epiceats.png';
import nobina from '../media/prevclients/nobina.png';

const logos = [epiceats, nobina];

const Grid = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: row;
`;

interface LogoProps {
  size: number;
}

const LogoGrid = ({ size }: LogoProps) => {
  return (
    <Grid size={size}>
      {logos.map((logo, index) => (
        <Logo src={logo} name={clients[index].name} key={clients[index].id} />
      ))}
    </Grid>
  );
};

export default LogoGrid;
