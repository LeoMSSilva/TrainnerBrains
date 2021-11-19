import React from 'react';
import Title from '../../components/Title';
import ButtonGoBack from '../../components/ButtonGoBack';
import * as Styled from './styles';

const FastReading = () => {

  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="FastReadingTrainner" />
      </Styled.Row>
    </Styled.Container>
  );
};

export default FastReading;
