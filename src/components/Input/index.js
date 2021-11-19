import React from 'react';
import * as Styled from './styles';

const Input = ({value, setValue, placeholder, keyboardType = 'default'}) => {
  const hadleOnChangeText = value => {
    setValue('');
    setValue(value);
  };

  return (
    <>
      <Styled.Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#0c4b93f3"
        onChangeText={hadleOnChangeText}
        keyboardType={keyboardType}
      />
    </>
  );
};

export default Input;
