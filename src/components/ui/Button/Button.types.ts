import { ButtonHTMLAttributes } from 'react';

type ButtonStyledProps = {
  fullWidth?: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyledProps;
