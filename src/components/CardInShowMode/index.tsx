import { IFlashCard } from '../../pages/Memorization';
import * as Styles from './styles';

type ICard = {
  questionOrAnswers: boolean;
  position: number;
  value: IFlashCard;
  onPress: () => void;
};

export const CardInShowMode = ({
  questionOrAnswers,
  position,
  value,
  onPress,
}: ICard) => {
  return (
    <Styles.Container onPress={onPress}>
      <Styles.Text>
        {(questionOrAnswers ? value.question : value.answer) ||
          `Digite a ${
            questionOrAnswers ? 'sua pergunta' : 'a resposta da sua pergunta'
          } ${position + 1}`}
      </Styles.Text>
    </Styles.Container>
  );
};
