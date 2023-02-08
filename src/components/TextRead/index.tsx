import * as Styles from './styles';

type ITextRead = {
  text: string;
};

export const TextRead = ({ text }: ITextRead) => {
  return <Styles.Text>{text}</Styles.Text>;
};
