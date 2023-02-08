import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/core';

import { useTheme } from 'styled-components';

import Background from '../../assets/backgroundOpacity.png';
import * as Styles from './styles';

export const Welcome = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('SelectTraining');
  };
  const { colors } = useTheme();
  return (
    <Styles.Container>
      <Styles.Row>
        <Styles.TextLogoLight>Trainner</Styles.TextLogoLight>
        <Styles.TextLogoDark>Brains</Styles.TextLogoDark>
      </Styles.Row>
      <Styles.ImageContainer
        source={Background}
        resizeMode="contain"
      >
        <Styles.TextMessage>
          Seja muito bem vindo ao seu personal trainner cerebral!
          {'\n'}
          Aqui você encontrará vários treinamentos para auxiliar em seus
          momentos de estudos.
        </Styles.TextMessage>
      </Styles.ImageContainer>
      <Styles.Next
        activeOpacity={0.7}
        onPress={handleNavigation}
      >
        <Icon
          name="navigate-next"
          color={colors.background}
          size={32}
        />
      </Styles.Next>
    </Styles.Container>
  );
};
