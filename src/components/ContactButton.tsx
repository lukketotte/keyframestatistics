import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #ff2033;
  padding: 0.25em 1em;
  border: 2px solid #ff2033;
  border-radius: 5px;
  font-size: 20px;
  background-color: transparent;
  transition: 0.2s;
  &:hover {
    background-color: #ff2033;
    color: black;
  }
`;

interface ContactButton {
  children: string;
}

const ContactButton = ({ children }: ContactButton) => {
  return <Button>{children}</Button>;
};

export default ContactButton;
