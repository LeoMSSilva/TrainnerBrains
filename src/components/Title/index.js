import React from 'react';
import * as Styled from './styles';

const Title = ({text}) => {
  return (
    <Styled.Container>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  );
};

export default Title;
