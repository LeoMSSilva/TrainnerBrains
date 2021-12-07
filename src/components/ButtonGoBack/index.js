import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Entypo';
import * as Styled from './styles';

const ButtonGoBack = () => {
  const navigation = useNavigation();
  const handleGoBack = () => navigation.goBack();

  return (
    <Styled.Goback opacity={0.7} onPress={handleGoBack}>
      <Icon name="arrow-left" color="#1a4384" style={{fontSize: 45}} />
    </Styled.Goback>
  );
};

export default ButtonGoBack;
