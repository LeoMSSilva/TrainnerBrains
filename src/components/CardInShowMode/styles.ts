import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
`;
