import React from 'react';
import styled from 'styled-components';
import Email from './Email';
import LogoGrid from './LogoGrid';
import members from '../constants/team/members.json';
import Header from './Header';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0em auto;
  position: relative;

  @media (max-width: 767px) {
    margin: 0rem auto;
  }
`;

const SubHeader = styled.h2`
  width: 70vw;
  font-size: 30px;
  font-weight: 50;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 25px;
    font-weight: 40;
  }
`;

const BodyDiv = styled.div`
  width: 60vw;
  font-size: 19px;
  font-weight: 50;
  text-align: center;
  line-height: 35px;

  @media (max-width: 767px) {
    font-size: 16px;
    font-weight: 40;
    line-height: 30px;
    z-index: 0;
  }
`;

interface BodyProps {
  width: number;
}

const Body = ({ width }: BodyProps) => {
  return (
    <MainDiv>
      <Header width={width} />
      <SubHeader>
        <p>
          We know machine learning, algorithms and recommender systems, data
          analysis and reports, econometrics, statistical and economic models
          and much more.
        </p>
      </SubHeader>
      <BodyDiv>
        <p>
          We are a team of three with a passion for everything related to
          statistics, economics and data science. Our services range from the
          application of classical statistical tools to innovative solutions
          where different sciences and fields are combined and utilized
          together.
        </p>
        <p>
          We approach each problem and task with an open mind and great resolve
          in order to meet clients’ needs. In each and every step, whether it is
          in the context of analysing data and presenting results or in the
          setting of developing solutions in close-knit cooperation with
          clients, we will exercise our outmost effort to reach desired results.
        </p>
        <p>For more information, feel free to contact us at</p>
        {members.map((m) => (
          <Email email={m.email} key={m.id}></Email>
        ))}
      </BodyDiv>
      <LogoGrid size={width} />
    </MainDiv>
  );
};

export default Body;
