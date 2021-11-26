import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Entypo';
import * as Styled from './styles';

const SelectorButton = ({screen, text, color = '#0c4b93'}) => {
  const navigation = useNavigation();
  const handleGoBack = () => navigation.navigate(`${screen}`);

  return (
    <Styled.Button opacity={0.7} onPress={handleGoBack} color={color}>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Button>
  );
};

export default SelectorButton;
