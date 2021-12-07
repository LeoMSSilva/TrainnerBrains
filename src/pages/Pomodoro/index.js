import React, {useEffect, useState} from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import Title from '../../components/Title';
import Timer from '../../components/Timer';
import ButtonPlayer from '../../components/ButtonPlayer';
import * as Styled from './styles';

const Pomodoro = () => {
  const [status, setStatus] = useState(true);
  // [25*60, 5*60, 25*60, 5*60, 25*60, 5*60, 25*60, 15*60];
  const pomodoro = [1500, 300, 1500, 300, 1500, 300, 1500, 900];
  const [positionTimer, setPositionTimer] = useState(0);
  const [currentTime, setCurrentTime] = useState();
  const [timer, setTimer] = useState();

  const decrement = () => {
    const interval = setInterval(() => {
      status && setCurrentTime(currentTime => currentTime - 1);
      clearInterval(timer);
    }, 1000);
    setTimer(interval);
  };

  const handlePomodoro = () => {
    setStatus(!status);
    decrement();
  };

  const isFinalWords = () =>
    positionTimer + 1 < pomodoro.length ? positionTimer + 1 : 0;

  //next position time in pomodoro
  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timer);
      setStatus(!status);
      setPositionTimer(isFinalWords);
    }
  }, [currentTime]);

  //next time in pomodoro
  useEffect(() => setCurrentTime(pomodoro[positionTimer]), [positionTimer]);

  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="PomoTrainner" />
      </Styled.Row>
      <ButtonPlayer
        size={200}
        name={status ? 'play' : 'pause'}
        onPress={handlePomodoro}
      />
      <Timer text={currentTime} />
      <Styled.Status>
        {positionTimer % 2 === 0 ? 'Focus' : 'Pause'}
      </Styled.Status>
    </Styled.Container>
  );
};

export default Pomodoro;
