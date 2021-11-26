import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: 200px;
  background-color: #0c4b93;
`;

export const Text = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: #edf5f7;
`;
