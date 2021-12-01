import React, {useEffect, useState} from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Title from '../../components/Title';
import Menu from '../../components/Menu';
import Test from '../../components/Test';
import * as Styled from './styles';

const Memorization = () => {
  const [edit, setEdit] = useState(true);
  const [test, setTest] = useState(false);

  const [revision, setRevision] = useState(false);
  const [isQuestion, setIsQuestion] = useState(true);
  const [position, setPosition] = useState(1);

  const [questions, setQuestions] = useState(Array(10).fill('abc1'));
  const [answers, setAnswers] = useState(Array(10).fill('abc2'));
  const [hits, setHits] = useState(Array(10).fill(undefined));

  const [currentValue, setCurrentValue] = useState(undefined);

  // //enable test
  // useEffect(() => {

  //   const salveTreino = ()=>{
  //     const test = {
  //       questions,
  //       answers,
  //       hits,
  //     };

  //     const fommatedTest = JSON.stringify(test);

  //     AsyncStorage.set('@MemorizationTrainer', fommatedTest);
  //   }

  //   const bootstrap = async () => {
  //     const lastTestRaw = AsyncStorage.get('@MemorizationTrainer');
  //     const lastTest = JSON.parse(lastTestRaw);

  //     setHits(lastTest.hits);
  //     setAnswers(lastTest.answers);
  //     setQuestions(lastTest.questions);

  //     AsyncStorage.remove('@MemorizationTrainer');
  //   };
  // }, []);

  //enable test
  useEffect(() => {
    if (answers.every(answer => answer !== undefined)) setTest(true);
    else setTest(false);
  }, [answers]);

  //enable revision
  useEffect(() => {
    if (hits.every(hit => hit !== undefined)) setRevision(true);
    else setRevision(false);
  }, [hits]);

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

  //increment arrays questions, answers, hits
  const incrementArray = (newValue, array, setArray) => {
    const newArray = [...array];
    newArray[position - 1] = newValue;
    setArray(newArray);
    setCurrentValue(undefined);
  };

  //unfilled field
  const notFilled = value =>
    value == undefined
      ? isQuestion
        ? `Digite a pergunta ${position}`
        : `Digite a resposta da pergunta ${position}`
      : value;

  // _hitOrMiss recebe true || false
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
          <Test
            isCorrection={hits[position - 1]}
            onClickCorrection={handleHitOrMiss}
          />
        )}
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
