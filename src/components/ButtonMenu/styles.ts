import styled from 'styled-components/native';

export const Button = styled.TouchableHighlight<{ disable: boolean }>`
  height: 100%;
  width: 33%;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ disable, theme }) =>
    disable ? theme.colors.bgDisable : theme.colors.primary};
`;

export const Text = styled.Text<{ disable: boolean }>`
  font-size: 24px;
  font-weight: 900;
  color: ${({ disable, theme }) =>
    disable ? theme.colors.disable : theme.colors.background};
`;
