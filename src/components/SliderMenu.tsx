import React, { useContext } from 'react';
import styled from 'styled-components';
import { FiInstagram } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';
import { UIContext } from '../context/Context';
import BurgerButton from './BurgerButton';

// TODO: move slider menu outside of the Linkdiv. It is pushed beneath the elements

const Ul = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  background-color: whitesmoke;
  position: absolute;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  width: 50%;
  height: 92vh;
  font-size: 1.5em;
  z-index: 100;

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
  const { state, dispatch } = useContext(UIContext);

  const clicked = () => {
    dispatch({ type: 'SET_OPEN', payload: false });
  };

  return (
    <OutsideClickHandler onOutsideClick={() => clicked()}>
      <BurgerButton />
      <Ul open={state.open}>
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
    </OutsideClickHandler>
  );
};

export default SliderMenu;
