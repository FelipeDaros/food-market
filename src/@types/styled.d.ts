import 'styled-components';
import theme from '../style/theme';

declare module 'styled-components'{
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {};
}