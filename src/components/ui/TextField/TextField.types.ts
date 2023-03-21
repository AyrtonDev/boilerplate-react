import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type TextFieldStyled = {
  label?: string;
  flex?: string | number;
};

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  TextFieldStyled;
