import React, {useEffect, useState} from 'react';
import ButtonPlayer from '../../components/ButtonPlayer';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import Timer from '../../components/Timer';
import * as Styled from './styles';
import ButtonGoBack from '../../components/ButtonGoBack';

const Pomodoro = () => {
  const [status, setStatus] = useState(true);
  const pomodoro = [25, 5, 25, 5, 25, 5, 25, 15];
  const [positionTimer, setPositionTimer] = useState(0);
  const [currentTime, setCurrentTime] = useState();
  const [timer, setTimer] = useState();

  //start pomodoro
  useEffect(() => setCurrentTime(pomodoro[positionTimer] * 60), []);

  //stop before the negative number
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  const handlePomodoro = () => {
    setStatus(!status);
    const timer = setInterval(() => {
      status && setCurrentTime(currentTime => currentTime - 1);
      currentTime === 0 && clearInterval(timer);
    }, 1000);
    setTimer(timer);
  };

  //next time pomodoro
  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timer);
      setStatus(!status);

      setPositionTimer(positionTimer === 7 ? 0 : positionTimer + 1);
      setCurrentTime(pomodoro[positionTimer] * 60);
      setCurrentTime(
        pomodoro[positionTimer === 7 ? 0 : positionTimer + 1] * 60,
      );
    }
  }, [currentTime]);

  return (
    <Styled.Container>
      <ButtonGoBack />
      <Title text="Para seu treino recomendamos" />
      <SubTitle text="Pomodoro" />
      <ButtonPlayer name={status ? 'play' : 'pause'} onPress={handlePomodoro} />
      <Timer text={currentTime} />
      <Styled.Status>
        {positionTimer % 2 === 0 ? 'Focus' : 'Pause'}
      </Styled.Status>
    </Styled.Container>
  );
};

export default Pomodoro;
