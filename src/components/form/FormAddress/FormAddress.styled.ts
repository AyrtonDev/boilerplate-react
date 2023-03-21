import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  height: auto;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  flex-direction: column;
`;

export const Wrapped = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const WrappedInvert = styled.div`
  display: flex;
  justify-content: end;
`;

export const Divisor = styled.div`
  background-color: transparent;
  width: 10px;
`;
