import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Mask = styled(InputMask)`
  width: inherit;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 20px 10px;
`;

export const Input = styled.div`
  width: inherit;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 20px 10px;
`;

export const DivInput = styled.div<{ flex?: string | number }>`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  width: 100%;
  height: auto;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.heading3};
  margin-bottom: 1rem;
`;
