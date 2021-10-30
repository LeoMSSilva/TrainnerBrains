import React, {useState} from 'react';
import ButtonPlayer from '../../components/ButtonPlayer';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import * as Styled from './styles';

const Pomodoro = () => {
  const [status, setStatus] = useState(true);

  return (
    <Styled.Container>
      <Title text="Para seu treino recomendamos" />
      <SubTitle text="Pomodoro" />
      <ButtonPlayer
        name={status ? 'pause' : 'play'}
        onPress={() => {
          setStatus(!status);
        }}
      />
      <Styled.Timer>25:00</Styled.Timer>
      <Styled.Status>{status ? 'Focus' : 'Pause'}</Styled.Status>
    </Styled.Container>
  );
};

export default Pomodoro;
