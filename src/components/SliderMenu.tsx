import React from 'react';
import styled from 'styled-components';

//TODO: click outside functionality
// https://usehooks.com/useOnClickOutside/

const WrapperDiv = styled.div`
  z-index: 100;
`;

const Ul = styled.ul<{ open: boolean }>`
  padding: 2rem;
  background-color: whitesmoke;
  position: absolute;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: -1em;
  right: 0;
  height: 100vh;
  transition: transform 0.3s ease-in-out;

  div {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    margin-top: 30px;
    color: #ff2033;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    width: 50%;
    height: 100vh;
    font-size: 1.5em;
  }
`;

interface SliderI {
  open: boolean;
}

const SliderMenu = ({ open }: SliderI) => {
  return (
    <WrapperDiv>
      <Ul open={open}>
        <div>
          <a href='/'>Work</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
        </div>
      </Ul>
    </WrapperDiv>
  );
};

export default SliderMenu;
