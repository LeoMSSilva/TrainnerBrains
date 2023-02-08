import Icon from 'react-native-vector-icons/FontAwesome';

import { useTheme } from 'styled-components';

import * as Styles from './styles';

type ISpeedControl = {
  value: number;
  setValue: (value: number) => void;
};

export const SpeedControl = ({ value, setValue }: ISpeedControl) => {
  const max = 1500;
  const min = 50;
  const { colors } = useTheme();

  const increment = () => {
    const valueIncremented = value + 10;
    if (valueIncremented > max) {
      console.warn('O valor deve estar entre 50 - 1500');
    } else {
      setValue(valueIncremented);
    }
  };

  const decrement = () => {
    const valueDecremented = value - 10;
    if (valueDecremented < min) {
      console.warn('O valor deve estar entre 50 - 1500');
    } else {
      setValue(valueDecremented);
    }
  };

  const handleOnChangeText = (inputValue: string) => {
    const newValue = Number(inputValue);
    if (newValue > 1500 || newValue < 50) {
      console.warn('O valor deve estar entre 50 - 1500');
    } else {
      setValue(newValue);
    }
  };

  return (
    <Styles.Container>
      <Styles.Button onPress={decrement}>
        <Icon
          name="minus"
          size={16}
          color={colors.background}
        />
      </Styles.Button>
      <Styles.View>
        <Styles.Text
          value={value.toString()}
          placeholder={value.toString()}
          placeholderTextColor={colors.placeholderBlue}
          onChangeText={handleOnChangeText}
          keyboardType="numeric"
        />
      </Styles.View>
      <Styles.Button onPress={increment}>
        <Icon
          name="plus"
          size={16}
          color={colors.background}
        />
      </Styles.Button>
    </Styles.Container>
  );
};
