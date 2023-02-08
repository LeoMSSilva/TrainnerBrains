import Icon from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/core';

import { useTheme } from 'styled-components';

import * as Styles from './styles';

export const ButtonGoBack = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <Styles.GoBack
      activeOpacity={0.7}
      onPress={handleGoBack}
    >
      <Icon
        name="arrow-left"
        color={colors.primary}
        size={48}
      />
    </Styles.GoBack>
  );
};
