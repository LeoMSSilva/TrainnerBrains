import React from 'react';
import Title from '../../components/Title';
import SelectorButton from '../../components/SelectorButton';
import * as Styled from './styles';

const SelectTraining = () => {
  return (
    <Styled.Container>
      <Title text={`O que vamos \n treinar agora?`} />
      <Styled.Col>
        <SelectorButton text="Foco e concetração" screen="Pomodoro" />
        {/* <SelectorButton text="Cronograma de estudos" screen="FastReading" /> */}
        {/* <SelectorButton text="Memorização" screen="Memorization" /> */}
        <SelectorButton text="Velocidade de leitura" screen="StudySchedule" />
      </Styled.Col>
    </Styled.Container>
  );
};

export default SelectTraining;
