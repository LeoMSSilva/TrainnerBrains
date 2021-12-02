import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #edf5f7;
`;

export const Button = styled.TouchableOpacity`
  height: 100%;
  width: 33%;
  align-items: center;
  padding: 10px 20px;
  background-color: #0c4b93;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: ${({disable}) => (disable ? '#aaaaaa' : '#edf5f7')};
`;
