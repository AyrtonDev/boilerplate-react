import styled from 'styled-components';

export const Button = styled.button<{ fullWidth?: boolean }>`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: white;
  color: ${({ theme }) => theme.colors.secondary};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '180px')};
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;
