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
  const [text, setText] = useState(
    'Texto de exemplo usando o alfabeto com tamanho de 37 palavras: a b c d e f g h i j k l m n o p q r s t u v w x y z',
  );
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(' ');
  const [amountOfWords, setAmountOfWords] = useState(300);
  const [timeWordRead, setTimeWordRead] = useState(0);
  const [positionOfArray, setPositionOfArray] = useState(0);

  const isFinalWords = () => positionOfArray < words.length;

  const nextPositionArray = () => {
    const interval = setInterval(() => {
      !status && setCurrentWord(words[positionOfArray]);
      !status && isFinalWords && setPositionOfArray(positionOfArray + 1);
      clearInterval(interval);
    }, timeWordRead);
  };

  const handleRead = () => {
    setStatus(!status);
    setPositionOfArray(0);
    nextPositionArray();
  };

  //assemble word array
  useEffect(() => setWords(text.split(' ')), [text]);

  //time calculation
  useEffect(() => {
    setTimeWordRead((60 / amountOfWords) * 1000);
  }, [amountOfWords]);

  //next position of array
  useEffect(() => {
    !status && isFinalWords && nextPositionArray();
  }, [positionOfArray]);

  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="FastReadingTrainner" />
      </Styled.Row>
      {status ? (
        <Styled.Col>
          <Styled.TextInput>Cole aqui seu texto:</Styled.TextInput>
          <Input
            placeholder="Cole aqui o texto"
            setValue={setText}
            value={text}
          />
        </Styled.Col>
      ) : (
        <TextRead text={currentWord} />
      )}
      <Styled.Col>
        <ButtonPlayer
          size={70}
          name={status ? 'play' : 'pause'}
          onPress={handleRead}
        />
        <Styled.ColWPM>
          <Styled.WordsPerMinute>Controle de PPM</Styled.WordsPerMinute>
          <SpeedControl setValue={setAmountOfWords} value={amountOfWords} />
        </Styled.ColWPM>
      </Styled.Col>
    </Styled.Container>
  );
};

export default FastReading;
