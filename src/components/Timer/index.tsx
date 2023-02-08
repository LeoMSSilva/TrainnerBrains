import * as Styles from './styles';

type ITimer = {
  text: number;
};

export const Timer = ({ text }: ITimer) => {
  const normalizeDigits = (value: number) => String(value).padStart(2, '0');

  const showTimer = (value: number) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${normalizeDigits(minutes)}:${normalizeDigits(seconds)}`;
  };

  return (
    <>
      <Styles.Text>{showTimer(text)}</Styles.Text>
    </>
  );
};
