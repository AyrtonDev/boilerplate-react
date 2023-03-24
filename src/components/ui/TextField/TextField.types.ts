import { InputHTMLAttributes } from 'react';

export type TextFieldStyled = {
  label?: string;
  flex?: string;
  mask?: string | (string | RegExp)[];
};

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  TextFieldStyled;
