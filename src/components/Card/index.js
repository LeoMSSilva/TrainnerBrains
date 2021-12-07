import React from 'react';
import * as Styled from './styles';

const Card = ({
  placeholder,
  value,
  setValue,
  edit,
  hits,
  revision,
  onPress,
}) => {
  const hadleOnChangeText = (value) => setValue(value);
  return (
    <>
      {edit ? (
        <Styled.Container onPress={onPress} revision={revision} hits={hits}>
          <Styled.View>
            <Styled.Text>{value ? value : placeholder}</Styled.Text>
          </Styled.View>
        </Styled.Container>
      ) : (
        <Styled.Container revision={revision} hits={hits}>
          <Styled.Input
            multiline
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#edf5f7"
            onChangeText={hadleOnChangeText}
            keyboardType="default"
          />
        </Styled.Container>
      )}
    </>
  );
};

export default Card;
