import { useNavigation } from '@react-navigation/native';

import { SelectorButton } from '../../components/SelectorButton';
import * as Styles from './styles';

export const SelectTraining = () => {
  const navigation = useNavigation();
  return (
    <Styles.Container>
      <Styles.Text>O que vamos treinar agora?</Styles.Text>
      <Styles.Col>
        <SelectorButton
          text="Foco e concentração"
          navigate={() => navigation.navigate('Pomodoro')}
        />
        {/* <SelectorButton
          text="Cronograma de estudos"
          navigate={() => navigation.navigate('StudySchedule')}
        /> */}
        <SelectorButton
          text="Memorização"
          navigate={() => navigation.navigate('Memorization')}
        />
        <SelectorButton
          text="Velocidade de leitura"
          navigate={() => navigation.navigate('FastReading')}
        />
      </Styles.Col>
    </Styles.Container>
  );
};
