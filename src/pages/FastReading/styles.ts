import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 56px 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Row = styled.View`
  width: 96%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`;

export const Col = styled.View`
  width: 96%;
  align-items: center;
`;

export const ColWPM = styled.View`
  width: 200px;
  align-items: center;
`;

export const TextInput = styled.Text`
  margin-bottom: 8px;
  font-size: 28px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WordsPerMinute = styled.Text`
  margin: 8px 0px;
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`;
