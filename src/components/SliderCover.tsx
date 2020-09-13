import React, { useContext } from 'react';
import styled from 'styled-components';
import { UIContext } from '../context/Context';

type DivProps = {
  open: boolean;
  z: number;
};

const CoverDiv = styled.div<DivProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: ${(props) => (props.open ? props.z : -1)};
  opacity: ${(props) => (props.open ? 0.5 : 0)};
`;

interface SliderI {
  z: number;
}

const SliderCover = ({ z }: SliderI) => {
  const { state } = useContext(UIContext);
  return <CoverDiv open={state.open} z={z} />;
};

export default SliderCover;
