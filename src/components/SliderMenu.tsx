import React from 'react';
import styled from 'styled-components';
import { FiInstagram } from 'react-icons/fi';

// TODO: move slider menu outside of the Linkdiv. It is pushed beneath the elements

const Ul = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  background-color: whitesmoke;
  position: absolute;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 50%;
  height: 100vh;
  font-size: 1.5em;
  margin-top: 0;

  a {
    margin-top: 30px;
    color: #ff2033;
    text-decoration: none;
    &:hover {
      font-size: 1.1em;
      transition: font 0.3s ease;
    }
  }
`;

const MenuDiv = styled.div`
  margin-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomDiv = styled.div`
  bottom: 0;
  position: relative;
`;

interface SliderI {
  open: boolean;
}

const SliderMenu = ({ open }: SliderI) => {
  return (
    <Ul open={open}>
      <MenuDiv>
        <a href='/'>Work</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
      </MenuDiv>
      <BottomDiv>
        Testar lite ifall det funkar
        <FiInstagram />
      </BottomDiv>
    </Ul>
  );
};

export default SliderMenu;
