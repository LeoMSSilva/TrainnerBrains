import React, {useState} from 'react';
import ButtonPlayer from '../../components/ButtonPlayer';

import * as Styled from './styles';

const Pomodoro = () => {
  const [status, setStatus] = useState(true);

  return (
    <Styled.Container>
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
