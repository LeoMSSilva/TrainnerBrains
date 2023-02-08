import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 90%;
  height: 64px;
  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
  font-size: 20px;
`;
