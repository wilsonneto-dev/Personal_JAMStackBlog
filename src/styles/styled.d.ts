import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      featuredBackground: string;
    };
    sizes: {
      box: string;
    };
  }
}
