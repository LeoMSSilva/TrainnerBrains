import { useState } from 'react';

import { useTheme } from 'styled-components';

import { IFlashCard } from '../../pages/Memorization';
import * as Styles from './styles';

type IEditableCard = {
  questionOrAnswers: boolean;
  position: number;
  value: IFlashCard[];
  setValue: (value: IFlashCard[]) => void;
};

export const CardInEditMode = ({
  questionOrAnswers,
  position,
  value,
  setValue,
}: IEditableCard) => {
  const { colors } = useTheme();
  const [cardSelected, setCardSelected] = useState<IFlashCard>(value[position]);

  const handleOnChangeText = (changedText: string) => {
    const newPositionValues = { ...cardSelected };
    if (questionOrAnswers) {
      newPositionValues.question = changedText;
      newPositionValues.changedQuestion = !!changedText.length;
    } else {
      newPositionValues.answer = changedText;
      newPositionValues.changedAnswer = !!changedText.length;
    }
    const newArrayValues = [...value];
    newArrayValues[position] = newPositionValues;
    setCardSelected(newPositionValues);
    setValue(newArrayValues);
  };

  return (
    <Styles.Container>
      <Styles.Input
        multiline
        value={questionOrAnswers ? cardSelected.question : cardSelected.answer}
        placeholder={`Digite a ${
          questionOrAnswers ? 'sua pergunta' : 'a resposta da sua pergunta'
        } ${position + 1}`}
        placeholderTextColor={colors.placeholder}
        onChangeText={handleOnChangeText}
        keyboardType="default"
      />
    </Styles.Container>
  );
};
