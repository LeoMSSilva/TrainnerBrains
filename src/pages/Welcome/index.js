import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Title from '../../components/Title';
import Background from '../../assets/backgroundOpacity.png';
import * as Styled from './styles';

const Welcome = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('SelectTraining');
  };
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.TextLogoLight>Trainner</Styled.TextLogoLight>
        <Styled.TextLogoDark>Brains</Styled.TextLogoDark>
      </Styled.Row>
      <Styled.ImageContainer source={Background} resizeMode="contain">
        <Title
          text={
            'Seja muito bem vindo ao seu personal trainner cerebral!' +
            `\n` +
            'Aqui você encontrará vários treinamentos para auxiliar em seus momentos de estudos.'
          }
        />
      </Styled.ImageContainer>
      <Styled.Next opacity={0.7} onPress={handleNavigation}>
        <Styled.TextNext>{'>'}</Styled.TextNext>
      </Styled.Next>
    </Styled.Container>
  );
};

export default Welcome;
