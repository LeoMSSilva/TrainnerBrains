import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 144px;
  height: 42px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  width: 30%;
  height: 90%;
  align-items: center;
  justify-content: center;
`;

export const View = styled.View`
  width: 35%;
  height: 90%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.TextInput`
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
