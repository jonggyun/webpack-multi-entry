import React from 'react';
import styled from 'styled-components';

import './style.scss';
import logo from './logo.svg';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <LogoImage src={logo} alt="logo_img" />
      <h3 className="title">Hello, React</h3>
    </Wrapper>
  );
};

export default Root;
