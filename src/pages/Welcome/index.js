import React from 'react';
import {useNavigation} from '@react-navigation/core';
import * as Styled from './styles';

const Welcome = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Pomodoro');
  };
  return (
    <Styled.Container>
      <Styled.Next opacity={0.7} onPress={handleNavigation}>
        <Styled.TextNext>{'>'}</Styled.TextNext>
      </Styled.Next>
    </Styled.Container>
  );
};

export default Welcome;
