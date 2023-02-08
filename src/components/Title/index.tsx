import * as Styles from './styles';

type ITitle = {
  text: string;
};

export const Title = ({ text }: ITitle) => {
  return <Styles.Text>{text}</Styles.Text>;
};
