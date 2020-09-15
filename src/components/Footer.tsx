import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  bottom: 0;
  width: 100%;
  height: 60px;
  font-size: 12px;
  font-weight: 50;
  background-color: #f0f0f0;
  color: #969696;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: calc(100vw - 100%);
`;

const TextDiv = styled.div`
  margin-right: 0;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <TextDiv>
        © 2018 Key Frame Statistics AB  | Uppsala | info@keyframestatistics.se
      </TextDiv>
    </FooterDiv>
  );
};

export default Footer;
