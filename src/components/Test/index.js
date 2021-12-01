import React from 'react';
import * as Styled from './styles';

const Test = ({isCorrection, onClickCorrection}) => {
  const handleClick = isRight => onClickCorrection(isRight);
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.Text>Acertei?</Styled.Text>
      </Styled.Row>
      <Styled.Row>
        <Styled.Button active={isCorrection} onPress={() => handleClick(true)}>
          <Styled.TextButton active={isCorrection}>Sim</Styled.TextButton>
        </Styled.Button>

        <Styled.Button
          active={isCorrection != undefined && !isCorrection}
          onPress={() => handleClick(false)}
          onLongPress={() => handleClick(false)}>
          <Styled.TextButton
            active={isCorrection != undefined && !isCorrection}>
            Não
          </Styled.TextButton>
        </Styled.Button>
      </Styled.Row>
    </Styled.Container>
  );
};

export default Test;
