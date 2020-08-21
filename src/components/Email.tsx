import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  background-image: -webkit-linear-gradient(left, #ff2033, #8e00fe);
  -webkit-background-clip: text;
  font-weight: 500;
  color: #8e00fe;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 2px;
  &&:after {
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to right, #ff2033, #8e00fe);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &&:hover:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

interface EmailProps {
  email: string;
}

const Email = ({ email }: EmailProps) => {
  return (
    <div>
      <StyledLink href='#'>{email}</StyledLink>
    </div>
  );
};

export default Email;
