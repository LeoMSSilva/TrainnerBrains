import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ size: number }>`
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
`;
