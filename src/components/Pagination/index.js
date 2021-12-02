import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Styled from './styles';

const Pagination = ({value, setValue}) => {
  const max = 10;
  const min = 1;
  const increment = () =>
    value < max ? setValue(value => value + 1) : setValue(1);
  const decrement = () =>
    value > min ? setValue(value => value - 1) : setValue(10);
  return (
    <Styled.Container>
      <Styled.Button onPress={decrement}>
        <Icon name="caretleft" color="#1a4384" style={{fontSize: 30}} />
      </Styled.Button>
      <Styled.View>
        <Styled.Text>
          {value}/{max}
        </Styled.Text>
      </Styled.View>
      <Styled.Button onPress={increment}>
        <Icon name="caretright" color="#1a4384" style={{fontSize: 30}} />
      </Styled.Button>
    </Styled.Container>
  );
};

export default Pagination;
