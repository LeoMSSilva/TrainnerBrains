import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #edf5f7;
  padding: 60px 0px 0px;
`;

export const Row = styled.View`
  padding: 30px 10px;
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

export const Text = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #0c4b93;
  margin-bottom: 20px;
`;
