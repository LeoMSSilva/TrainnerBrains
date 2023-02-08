import 'styled-components-react-native';

import { ThemeType } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
