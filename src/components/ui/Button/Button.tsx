import { FC } from 'react';
import { ButtonProps } from './Button.types';
import * as Styled from './Button.styled';

const Button: FC<ButtonProps> = ({ children, fullWidth, ...props }) => {
  return (
    <Styled.Button fullWidth={fullWidth} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
