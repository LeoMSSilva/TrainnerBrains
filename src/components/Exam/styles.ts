import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: auto;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.TouchableOpacity<{ active: boolean }>`
  width: 25%;
  margin: 12px 8px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
`;

export const TextButton = styled.Text<{ active: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.primary};
`;
