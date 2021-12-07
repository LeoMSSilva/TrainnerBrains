import React, {useEffect, useState} from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Title from '../../components/Title';
import Menu from '../../components/Menu';
import Test from '../../components/Test';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Styled from './styles';

const Memorization = () => {
  const [edit, setEdit] = useState(true);
  const [test, setTest] = useState(false);
  const [revision, setRevision] = useState(false);
  const [isQuestion, setIsQuestion] = useState(true);
  const [position, setPosition] = useState(1);
  const [questions, setQuestions] = useState(Array(10).fill());
  const [answers, setAnswers] = useState(Array(10).fill());
  const [hits, setHits] = useState(Array(10).fill(undefined));
  const [currentValue, setCurrentValue] = useState(undefined);
  const [enableTest, setEnableTest] = useState(false);
  const [enableRevision, setEnableRevision] = useState(false);

  //local save
  const salveTreino = async () => {
    const flashCards = {
      questions,
      answers,
    };
    await AsyncStorage.setItem(
      '@MemorizationTrainer',
      JSON.stringify(flashCards),
    );
  };

  //load local
  useEffect(() => {
    const bootstrap = async () => {
      try {
        const flashCardsStorageString = await AsyncStorage.getItem(
          '@MemorizationTrainer',
        );
        const flashCards = JSON.parse(flashCardsStorageString);
        setAnswers(flashCards.answers);
        setQuestions(flashCards.questions);
        AsyncStorage.clear();
      } catch (error) {
        console.log(error);
      }
    };
    bootstrap();
  }, []);

  //enable test
  useEffect(() => {
    if (answers.every(answer => answer !== undefined)) {
      salveTreino();
      setEnableTest(true);
    } else {
      setEnableTest(false);
    }
  }, [answers]);

  //enable revision
  useEffect(() => {
    if (hits.every(hit => hit !== undefined)) setEnableRevision(true);
    else setEnableRevision(false);
  }, [hits]);

  //update edit or not edit card
  useEffect(() => {
    salveTreino()
    edit
      ? incrementArray(
          currentValue,
          isQuestion ? questions : answers,
          isQuestion ? setQuestions : setAnswers,
        )
      : setCurrentValue(
          isQuestion ? questions[position - 1] : answers[position - 1],
        );
  }, [edit]);

  //increment arrays questions, answers, hits
  const incrementArray = (currentValue, array, setArray) => {
    const newValue = [...array];
    newValue[position - 1] = currentValue;
    setArray(newValue);
    setCurrentValue(undefined);
  };

  //unfilled field
  const notFilled = value =>
    value == undefined
      ? isQuestion
        ? `Digite a pergunta ${position}`
        : `Digite a resposta da pergunta ${position}`
      : value;

  const handleHitOrMiss = hitOrMiss => {
    incrementArray(hitOrMiss, hits, setHits);
    if (hitOrMiss != undefined && position < 10) {
      setTimeout(() => {
        setIsQuestion(!isQuestion);
        setPosition(position + 1);
      }, 500);
    }
  };

  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="MemorizationTrainner" />
      </Styled.Row>

      <Styled.Col>
        <Styled.Text>{isQuestion ? 'Pergunta' : 'Resposta'}</Styled.Text>
        <Card
          placeholder={notFilled(
            edit
              ? isQuestion
                ? questions[position - 1]
                : answers[position - 1]
              : currentValue,
          )}
          value={
            edit
              ? isQuestion
                ? questions[position - 1]
                : answers[position - 1]
              : currentValue
          }
          setValue={setCurrentValue}
          edit={edit}
          hits={hits[position - 1]}
          revision={revision}
          onPress={() => setIsQuestion(!isQuestion)}
        />
        <Pagination setValue={setPosition} value={position} />
        {!isQuestion && test && (
          <Test value={hits[position - 1]} setValue={handleHitOrMiss} />
        )}
      </Styled.Col>

      <Menu
        edit={edit}
        setEdit={setEdit}
        setTest={setTest}
        setRevision={setRevision}
        enableButtonTest={enableTest}
        setEnableButtonTest={setEnableTest}
        enableButtonRevision={enableRevision}
        setEnableButtonRevision={setEnableRevision}
        setHits={setHits}
      />
    </Styled.Container>
  );
};

export default Memorization;
