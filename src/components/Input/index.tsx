import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';

import * as Styles from './styles';

type IInput = TextInputProps & {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  keyboardType?: string;
};

export const Input = ({
  value,
  setValue,
  placeholder,
  keyboardType = 'default',
}: IInput) => {
  const { colors } = useTheme();

  const handleOnChangeText = (inputValue: string) => {
    setValue('');
    setValue(inputValue);
  };

  return (
    <Styles.Input
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholderBlue}
      onChangeText={handleOnChangeText}
      keyboardType={keyboardType}
    />
  );
};
