import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonGoBack } from '../../components/ButtonGoBack';
import { CardInEditMode } from '../../components/CardInEditMode';
import { CardInRevisionMode } from '../../components/CardInRevisionMode';
import { CardInShowMode } from '../../components/CardInShowMode';
import { Exam } from '../../components/Exam';
import { Menu } from '../../components/Menu';
import { Pagination } from '../../components/Pagination';
import { Title } from '../../components/Title';
import * as Styles from './styles';

export type IHit = 'empty' | 'true' | 'false';
export type IExecutionMode =
  | 'modeEditionEnabled'
  | 'modeExamDisabled'
  | 'modeExamEnabled'
  | 'modeRevisionDisabled'
  | 'modeRevisionEnabled';

export type IFlashCard = {
  question: string;
  changedQuestion: boolean;
  answer: string;
  changedAnswer: boolean;
  hit: IHit;
  changedHit: boolean;
};

const initialCard = {
  question: '',
  changedQuestion: false,
  answer: '',
  changedAnswer: false,
  hit: 'empty',
  changedHit: false,
};

export const Memorization = () => {
  const [cards, setCards] = useState<IFlashCard[]>(Array(10).fill(initialCard));
  const [questionOrAnswers, setQuestionOrAnswers] = useState(true);
  const [position, setPosition] = useState<number>(0);
  const [edit, setEdit] = useState(false);
  const [executionMode, setExecutionMode] =
    useState<IExecutionMode>('modeEditionEnabled');

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const cardsString = await AsyncStorage.getItem('@MemorizationTrainer');
        if (cardsString?.length) {
          const cardsObject = JSON.parse(cardsString) as IFlashCard[];
          setCards(cardsObject);
          console.log('loading');
          await AsyncStorage.clear();
          console.log('cleaned');
        }
      } catch (e) {
        console.log(e);
      }
    };
    bootstrap();
  }, []);

  useEffect(() => {
    const saveTraining = async () => {
      try {
        await AsyncStorage.setItem(
          '@MemorizationTrainer',
          JSON.stringify(cards),
        );
        console.log('saving');
      } catch (e) {
        console.log(e);
      }
    };
    saveTraining();
  }, [cards]);

  useEffect(() => {
    cards.every((card) => card.changedAnswer && card.changedQuestion) &&
      executionMode === 'modeEditionEnabled' &&
      setExecutionMode('modeExamDisabled');

    cards.every((card) => card.changedHit) &&
      executionMode === 'modeExamEnabled' &&
      setExecutionMode('modeRevisionDisabled');
  }, [cards, executionMode]);

  return (
    <Styles.Container>
      <Styles.Row>
        <ButtonGoBack />
        <Title text="MemoTrainner" />
      </Styles.Row>
      <Styles.Col>
        <Styles.Text>{questionOrAnswers ? 'Pergunta' : 'Resposta'}</Styles.Text>
        {edit ? (
          <CardInEditMode
            questionOrAnswers={questionOrAnswers}
            position={position}
            value={cards}
            setValue={setCards}
          />
        ) : executionMode === 'modeRevisionEnabled' ? (
          <CardInRevisionMode
            questionOrAnswers={questionOrAnswers}
            value={cards[position]}
            onPress={() => setQuestionOrAnswers(!questionOrAnswers)}
          />
        ) : (
          <CardInShowMode
            questionOrAnswers={questionOrAnswers}
            position={position}
            value={cards[position]}
            onPress={() => setQuestionOrAnswers(!questionOrAnswers)}
          />
        )}
        <Pagination
          setValue={setPosition}
          value={position}
        />
        {(executionMode === 'modeExamEnabled' ||
          executionMode === 'modeRevisionDisabled') && (
          <Exam
            position={position}
            value={cards}
            setValue={setCards}
          />
        )}
      </Styles.Col>

      <Menu
        edit={edit}
        setEdit={setEdit}
        executionMode={executionMode}
        setExecutionMode={setExecutionMode}
        value={cards}
        setValue={setCards}
      />
    </Styles.Container>
  );
};
