import React, {useState} from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import ButtonPlayer from '../../components/ButtonPlayer';
import Title from '../../components/Title';
import * as Styled from './styles';

const FastReading = () => {
  const [status, setStatus] = useState(true);

  const handleRead = () => {
    setStatus(!status);
  };

  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="FastReadingTrainner" />
      </Styled.Row>
      <ButtonPlayer
        size={70}
        name={status ? 'play' : 'pause'}
        onPress={handleRead}
      />
    </Styled.Container>
  );
};

export default FastReading;
