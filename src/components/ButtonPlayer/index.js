import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './styles';

const ButtonPlayer = ({name, onPress, size}) => {
  return (
    <Styled.Button onPress={onPress} size={size}>
      <Icon name={name} size={size / 4} color="#edf5f7" />
    </Styled.Button>
  );
};

export default ButtonPlayer;
