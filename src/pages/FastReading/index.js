import React, {useEffect, useState} from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import ButtonPlayer from '../../components/ButtonPlayer';
import Input from '../../components/Input';
import SpeedControl from '../../components/SpeedControl';
import TextRead from '../../components/TextRead';
import Title from '../../components/Title';
import * as Styled from './styles';

const FastReading = () => {
  const [status, setStatus] = useState(true);
  const [time, setTime] = useState(1);
  const [text, setText] = useState('Texto de exemplo');
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(' ');
  const [positionWordInWords, setPositionWordInWords] = useState(0);

  useEffect(() => setWords(text.split(' ')), [text]);

  const nextPositionArray = () => {
    const interval = setInterval(() => {
      setCurrentWord(words[positionWordInWords]);
      console.log('currentWord ' + currentWord);
      console.log('positionWordInWords ' + positionWordInWords);
      positionWordInWords < words.length &&
        setPositionWordInWords(positionWordInWords + 1);
      clearInterval(interval);
    }, time * 1000);
  };

  const handleRead = () => {
    setStatus(!status);
    setPositionWordInWords(0);
    nextPositionArray();
  };

  //next time pomodoro
  useEffect(() => {
    !status && positionWordInWords < words.length && nextPositionArray();
  }, [positionWordInWords]);

  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="FastReadingTrainner" />
      </Styled.Row>
      {status ? (
        <Input
          placeholder="Cole aqui o texto"
          setValue={setText}
          value={text}
        />
      ) : (
        <TextRead text={currentWord} />
      )}
      <ButtonPlayer
        size={70}
        name={status ? 'play' : 'pause'}
        onPress={handleRead}
      />
    </Styled.Container>
  );
};

export default FastReading;
