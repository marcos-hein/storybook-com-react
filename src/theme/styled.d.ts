import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ColorTokensTheme;
      accent: ColorTokensTheme;
    };
  }
}

interface ColorTokensTheme {
  main: string;
  light: string;
  dark: string;
  text: string;
}
