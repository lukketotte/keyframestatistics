import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  font-size: 15px;
  font-weight: 50;
  background-color: #f0f0f0;
  color: #969696;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div>© 2018 Key Frame Statistics AB</div>
    </FooterDiv>
  );
};

export default Footer;
