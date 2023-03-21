import { FC } from 'react';
import * as Styled from './TextField.styled';
import { TextFieldProps } from './TextField.types';

const TextField: FC<TextFieldProps> = ({ flex, label, ...props }) => {
  return (
    <Styled.DivInput flex={flex}>
      <Styled.Label htmlFor={props.id}>{label}</Styled.Label>
      <Styled.Input {...props} />
    </Styled.DivInput>
  );
};

export default TextField;
