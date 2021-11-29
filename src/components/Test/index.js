import React from 'react';
import * as Styled from './styles';

const Test = ({value, setValue}) => {
  const hadleClick = value => setValue(value);
  console.log('valor dentro ' + value);
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.Text>Acertei?</Styled.Text>
      </Styled.Row>
      <Styled.Row>
        <Styled.Button active={value} onPress={() => hadleClick(true)}>
          <Styled.TextButton active={value}>Sim</Styled.TextButton>
        </Styled.Button>
        <Styled.Button
          active={value != undefined && !value}
          onPress={() => hadleClick(false)}>
          <Styled.TextButton active={value != undefined && !value}>
            Não
          </Styled.TextButton>
        </Styled.Button>
      </Styled.Row>
    </Styled.Container>
  );
};

export default Test;
