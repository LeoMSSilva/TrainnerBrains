import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 56px 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Col = styled.View`
  height: 72%;
  width: 96%;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.Text`
  width: 88%;
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
