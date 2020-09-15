import React, { useContext } from 'react';
import styled from 'styled-components';
import { UIContext } from '../context/Context';

const Button = styled.button<{ open: boolean }>`
  position: relative;
  right: 0px;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 200;
  padding: 0;
  margin-right: 20px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? 'darkgray' : 'white')};
    border-radius: 5px;
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
  const { state, dispatch } = useContext(UIContext);

  const DrawerButton = (open: boolean) => {
    dispatch({
      type: 'SET_OPEN',
      payload: open,
    });
  };

  return (
    <Button open={state.open} onClick={() => DrawerButton(!state.open)}>
      <div />
      <div />
      <div />
    </Button>
  );
};

export default BurgerButton;
