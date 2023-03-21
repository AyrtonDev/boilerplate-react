type ColorsVariant = {
  primary?: string;
  secondary?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};
type Colors = {
  primary: string;
  secondary: string;
  error: string;
  white: string;
  gray: ColorsVariant;
};

type FontSize = {
  xs: string;
  heading4: string;
  buttonTitle: string;
  heading3: string;
  lg: string;
  xl: string;
  heading2: string;
  heading1: string;
  xxl: string;
};

type Breakpoint = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type Spacing = {
  xSmall: string;
  small: string;
  medium: string;
  xMedium: string;
  big: string;
  xBig: string;
};

type FontFamily = {
  base: string;
};

export type ThemeType = {
  colors: Colors;
  fontSize: FontSize;
  fontFamily: FontFamily;
  breakpoint: Breakpoint;
  spacing: Spacing;
};
