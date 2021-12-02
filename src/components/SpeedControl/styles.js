import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 120px;
  height: 42px;
  border-radius: 10px;
  background-color: #0c4b93;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  width: 30%;
  height: 90%;
  align-items: center;
  justify-content: center;
`;

export const ControlText = styled.Text`
  font-size: 17px;
  font-weight: 900;
  color: #edf5f7;
`;

export const View = styled.View`
  width: 35%;
  height: 90%;
  align-items: center;
  justify-content: center;
  background-color: #edf5f7;
`;

export const Text = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: #0c4b93;
`;
