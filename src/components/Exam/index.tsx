import { useState } from 'react';

import { IFlashCard, IHit } from '../../pages/Memorization';
import * as Styles from './styles';

type IExam = {
  position: number;
  value: IFlashCard[];
  setValue: (value: IFlashCard[]) => void;
};

export const Exam = ({ position, value, setValue }: IExam) => {
  const [cardSelected, setCardSelected] = useState<IFlashCard>(value[position]);

  const handleClick = (hit: IHit) => {
    const newPositionValues = { ...cardSelected };
    newPositionValues.hit = hit;
    newPositionValues.changedHit = hit !== 'empty';
    const newArrayValues = [...value];
    newArrayValues[position] = newPositionValues;
    setCardSelected(newPositionValues);
    setValue(newArrayValues);
  };
  return (
    <Styles.Container>
      <Styles.Row>
        <Styles.Text>Acertei?</Styles.Text>
      </Styles.Row>
      <Styles.Row>
        <Styles.Button
          active={value[position].hit === 'true'}
          onPress={() => handleClick('true')}
        >
          <Styles.TextButton active={value[position].hit === 'true'}>
            Sim
          </Styles.TextButton>
        </Styles.Button>
        <Styles.Button
          active={value[position].hit === 'false'}
          onPress={() => handleClick('false')}
        >
          <Styles.TextButton active={value[position].hit === 'false'}>
            Não
          </Styles.TextButton>
        </Styles.Button>
      </Styles.Row>
    </Styles.Container>
  );
};
