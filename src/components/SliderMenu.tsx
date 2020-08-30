import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul<{ open: boolean }>`
  font-size: 20px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: whitesmoke;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: -1em;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #ff2033;
    }
  }
`;

interface SliderI {
  open: boolean;
}

const SliderMenu = ({ open }: SliderI) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

export default SliderMenu;
