import React, { useState, useEffect, useContext, Fragment } from 'react';
import styled from 'styled-components';
import { UIContext } from './context/Context';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const MainDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`;

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const useViewport = () => {
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  };
  const { state, dispatch } = useContext(UIContext);
  useEffect(() => {
    return dispatch({
      type: 'SET_WIDTH',
      payload: width,
    });
  }, [dispatch, width]);

  useViewport();

  return (
    <Fragment>
      {state.width && (
        <MainDiv>
          <Header width={state.width} />
          <Body width={state.width} />
          <Footer />
        </MainDiv>
      )}
    </Fragment>
  );
}

export default App;
