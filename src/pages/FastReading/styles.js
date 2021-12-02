import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 90%;
  justify-content: space-between;
  align-items: center;
  background-color: #edf5f7;
  padding: 30px 10px;
  margin: 30px 0px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
`;

export const Col = styled.View`
  width: 100%;
  align-items: center;
`;

export const ColWPM = styled.View`
  width: 200px;
  align-items: center;
`;

export const TextInput = styled.Text`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 900;
  color: #0c4b93;
`;

export const WordsPerMinute = styled.Text`
  margin: 10px 0px;
  font-size: 18px;
  font-weight: 900;
  color: #0c4b93;
`;
