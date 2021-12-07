import React from 'react';
import * as Styled from './styles';

const SpeedControl = ({value, setValue}) => {
  const max = 1500;
  const min = 50;
  const increment = () => value < max && setValue(value => value + 10);
  const decrement = () => value > min && setValue(value => value - 10);
  const hadleOnChangeText = value => setValue(value);
  return (
    <Styled.Container>
      <Styled.Button onPress={() => decrement()}>
        <Styled.ControlText>-</Styled.ControlText>
      </Styled.Button>
      <Styled.View>
        <Styled.Text>{value}</Styled.Text>
      </Styled.View>
      <Styled.Button onPress={() => increment()}>
        <Styled.ControlText>+</Styled.ControlText>
      </Styled.Button>
    </Styled.Container>
  );
};

export default SpeedControl;
