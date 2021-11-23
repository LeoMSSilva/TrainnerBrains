import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #edf5f7;
  padding: 30px;
`;

export const Row = styled.View`
  padding: 30px 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
`;

export const Status = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #0c4b93;
`;
