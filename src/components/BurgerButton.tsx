import React, { useState } from 'react';
import styled from 'styled-components';
import SliderMenu from './SliderMenu';

const Button = styled.button<{ open: boolean }>`
  position: absolute;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 150;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? 'darkgray' : 'white')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const BurgerButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Button>
      <SliderMenu open={open} />
    </>
  );
};

export default BurgerButton;
