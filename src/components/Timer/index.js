import React from 'react';
import * as Styled from './styles';

const Timer = ({text}) => {
  const normalizeDigits = value => (value < 10 ? '0' + value : value);

  const showTimer = value => {
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    return `${normalizeDigits(minutes)}:${normalizeDigits(seconds)}`;
  };

  return (
    <>
      <Styled.Text>{showTimer(text)}</Styled.Text>
    </>
  );
};

export default Timer;
