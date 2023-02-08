import { TouchableOpacityProps } from 'react-native';

import * as Styles from './styles';

type ISelectorButton = TouchableOpacityProps & {
  navigate: () => void;
  text: string;
};

export const SelectorButton = ({ navigate, text }: ISelectorButton) => {
  return (
    <Styles.Button
      activeOpacity={0.7}
      onPress={navigate}
    >
      <Styles.Text>{text}</Styles.Text>
    </Styles.Button>
  );
};
