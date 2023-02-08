import { IFlashCard } from '../../pages/Memorization';
import * as Styles from './styles';

type ICard = {
  questionOrAnswers: boolean;
  value: IFlashCard;
  onPress: () => void;
};

export const CardInRevisionMode = ({
  questionOrAnswers,
  value,
  onPress,
}: ICard) => {
  return (
    <Styles.Container
      hit={value.hit !== 'empty' && value.hit === 'true'}
      onPress={onPress}
    >
      <Styles.Text>
        {questionOrAnswers ? value.question : value.answer}
      </Styles.Text>
    </Styles.Container>
  );
};
