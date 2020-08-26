import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UIContext } from './context/Context';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const MainDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return { width };
};

function App() {
  const { width } = useViewport();
  const { state, dispatch } = useContext(UIContext);
  return (
    <MainDiv>
      {console.log(state)}
      <Header width={width} />
      <Body width={width} />
      <Footer />
    </MainDiv>
  );
}

export default App;
