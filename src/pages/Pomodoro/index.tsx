import React, { useCallback, useEffect, useState } from 'react';

import { ButtonGoBack } from '../../components/ButtonGoBack';
import { ButtonPlayer } from '../../components/ButtonPlayer';
import { Timer } from '../../components/Timer';
import { Title } from '../../components/Title';
import * as Styles from './styles';

const pomodoroTimersInSeconds: number[] = [
  1500, 300, 1500, 300, 1500, 300, 1500, 900,
];

export const Pomodoro = () => {
  const [activeTimer, setActiveTimer] = useState(false);
  const [timerPosition, setTimerPosition] = useState(0);
  const [count, setCount] = useState(pomodoroTimersInSeconds[timerPosition]);

  useEffect(() => {
    if (activeTimer) {
      const interval = setInterval(() => {
        const currentCont = count - 1;
        setCount(currentCont);
      }, 1000);

      if (count === 0) {
        setActiveTimer(false);
        const newTimerPosition =
          timerPosition < pomodoroTimersInSeconds.length - 1
            ? timerPosition + 1
            : 0;
        setTimerPosition(newTimerPosition);
        setCount(pomodoroTimersInSeconds[newTimerPosition]);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [activeTimer, count, timerPosition]);

  const toggleTimer = useCallback(
    () => setActiveTimer(!activeTimer),
    [activeTimer],
  );

  return (
    <Styles.Container>
      <Styles.Row>
        <ButtonGoBack />
        <Title text="PomoTrainner" />
      </Styles.Row>
      <Styles.Col>
        <ButtonPlayer
          size={200}
          name={!activeTimer ? 'play' : 'pause'}
          onPress={toggleTimer}
        />
        <Timer text={count} />
      </Styles.Col>
      <Styles.Status>
        {timerPosition % 2 === 0 ? 'Foco' : 'Pausa'}
      </Styles.Status>
    </Styles.Container>
  );
};
