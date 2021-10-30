import React from 'react';
import {Text} from 'react-native';
import * as Styled from './styles';

const Title = ({text}) => {
  return (
    <>
      <Styled.Text>{text}</Styled.Text>
    </>
  );
};

export default Title;
