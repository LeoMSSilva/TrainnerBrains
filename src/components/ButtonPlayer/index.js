import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './styles';

const ButtonPlayer = ({name, onPress}) => {
  return (
    <Styled.Button onPress={onPress}>
      <Icon name={name} size={50} color="#edf5f7" />
    </Styled.Button>
  );
};

export default ButtonPlayer;
