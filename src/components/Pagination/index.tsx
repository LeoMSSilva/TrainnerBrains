import Icon from 'react-native-vector-icons/AntDesign';

import { useTheme } from 'styled-components';

import * as Styles from './styles';

type IPagination = {
  value: number;
  setValue: (value: number) => void;
};

export const Pagination = ({ value, setValue }: IPagination) => {
  const max = 9;
  const min = 0;
  const { colors } = useTheme();

  const increment = () => {
    const valueIncremented = value + 1;
    value < max ? setValue(valueIncremented) : setValue(min);
  };

  const decrement = () => {
    const valueDecremented = value - 1;
    value > min ? setValue(valueDecremented) : setValue(max);
  };

  return (
    <Styles.Container>
      <Styles.Button onPress={decrement}>
        <Icon
          name="caretleft"
          color={colors.primary}
          size={28}
        />
      </Styles.Button>
      <Styles.View>
        <Styles.Text>
          {value + 1}/{max + 1}
        </Styles.Text>
      </Styles.View>
      <Styles.Button onPress={increment}>
        <Icon
          name="caretright"
          color={colors.primary}
          size={28}
        />
      </Styles.Button>
    </Styles.Container>
  );
};
