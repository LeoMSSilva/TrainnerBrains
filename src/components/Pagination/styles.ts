import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 80%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  margin: 16px 0px 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
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

export const Text = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
