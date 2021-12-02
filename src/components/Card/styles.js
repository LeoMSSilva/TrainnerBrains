import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({revision, hits}) =>
    revision
      ? hits != undefined
        ? hits
          ? '#18930c'
          : '#930c0c'
        : '#0c4b93'
      : '#0c4b93'};
  padding: 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
  color: #edf5f7;
`;

export const View = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
  color: #edf5f7;
`;
