import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useTheme } from 'styled-components';

import * as Styles from './styles';

type IButtonPlayer = TouchableOpacityProps & {
  name: string;
  size: number;
};

export const ButtonPlayer = ({ name, onPress, size }: IButtonPlayer) => {
  const { colors } = useTheme();

  return (
    <Styles.Button
      onPress={onPress}
      size={size}
    >
      <Icon
        name={name}
        size={size / 2.6}
        color={colors.background}
      />
    </Styles.Button>
  );
};
