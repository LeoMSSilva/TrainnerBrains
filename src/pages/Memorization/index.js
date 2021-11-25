import React, {useEffect, useState} from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Title from '../../components/Title';
import Menu from '../../components/Menu';
import * as Styled from './styles';

const Memorization = () => {
  const [edit, setEdit] = useState(true);
  const [test, setTest] = useState(false);
  const [revision, setRevision] = useState(false);

  const [isQuestion, setIsQuestion] = useState(true);
  const [position, setPosition] = useState(1);

  const [questions, setQuestions] = useState(Array(10));
  const [answers, setAnswers] = useState(Array(10));
  const [hits, setHits] = useState(Array(10));
  const [currentValue, setCurrentValue] = useState(undefined);

  //enable test
  useEffect(() => {
    if (
      answers.every(answer => answer !== undefined) &&
      questions.every(question => question !== undefined)
    )
      setTest(true);
    else setTest(false);
  }, [questions, answers]);

  //update edit or not edit card
  useEffect(() => {
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

  //increment array questions, answers
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
      </Styled.Col>

      <Menu
        edit={edit}
        setEdit={setEdit}
        test={test}
        setTest={setTest}
        revision={revision}
        setRevision={setRevision}
      />
    </Styled.Container>
  );
};

export default Memorization;
