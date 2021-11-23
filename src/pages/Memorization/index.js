import React from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import Title from '../../components/Title';
import * as Styled from './styles';

const Memorization = () => {
  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="MemorizationTrainner" />
      </Styled.Row>
    </Styled.Container>
  );
};

export default Memorization;
