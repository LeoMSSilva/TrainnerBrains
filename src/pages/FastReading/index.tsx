import React, { useEffect, useState } from 'react';

import { ButtonGoBack } from '../../components/ButtonGoBack';
import { ButtonPlayer } from '../../components/ButtonPlayer';
import { Input } from '../../components/Input';
import { SpeedControl } from '../../components/SpeedControl';
import { TextRead } from '../../components/TextRead';
import { Title } from '../../components/Title';
import * as Styles from './styles';

const minuteInMilliseconds = 60000;

export const FastReading = () => {
  const [activeRead, setActiveRead] = useState(false);
  const [text, setText] = useState<string>('');
  const [words, setWords] = useState<string[]>([]);
  const [readPosition, setReadPosition] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [amountOfWords, setAmountOfWords] = useState<number>(300);

  useEffect(() => {
    if (activeRead) {
      const interval = setInterval(() => {
        setCurrentWord(words[readPosition]);
        setReadPosition(readPosition + 1);
      }, minuteInMilliseconds / amountOfWords);

      if (readPosition > words.length) {
        setActiveRead(!activeRead);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [readPosition, activeRead, words, amountOfWords]);

  const toggleRead = () => {
    !activeRead && setWords(text.split(' '));
    setReadPosition(0);
    setActiveRead(!activeRead);
  };

  return (
    <Styles.Container>
      <Styles.Row>
        <ButtonGoBack />
        <Title text="ReadTrainner" />
      </Styles.Row>
      {!activeRead ? (
        <Styles.Col>
          <Styles.TextInput>Cole aqui seu texto:</Styles.TextInput>
          <Input
            placeholder="Cole aqui o texto"
            setValue={setText}
            value={text}
          />
        </Styles.Col>
      ) : (
        <TextRead text={currentWord} />
      )}
      <Styles.Col>
        <ButtonPlayer
          size={64}
          name={!activeRead ? 'play' : 'pause'}
          onPress={toggleRead}
        />
        <Styles.ColWPM>
          <Styles.WordsPerMinute>Controle de PPM</Styles.WordsPerMinute>
          <SpeedControl
            setValue={setAmountOfWords}
            value={amountOfWords}
          />
        </Styles.ColWPM>
      </Styles.Col>
    </Styles.Container>
  );
};
