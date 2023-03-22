import { InputHTMLAttributes } from 'react';

export type TextFieldStyled = {
  label?: string;
  flex?: string;
};

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  TextFieldStyled;
