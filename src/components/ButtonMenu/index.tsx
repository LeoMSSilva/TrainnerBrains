import { TouchableHighlightProps } from 'react-native';

import * as Styles from './styles';

type IButtonMenu = TouchableHighlightProps & {
  text: string;
  opacity?: number;
  disable?: boolean;
};

export const ButtonMenu = ({
  text,
  opacity = 1,
  disable = false,
  ...rest
}: IButtonMenu) => {
  return (
    <Styles.Button
      disable={disable}
      activeOpacity={opacity}
      {...rest}
    >
      <Styles.Text disable={disable}>{text}</Styles.Text>
    </Styles.Button>
  );
};
