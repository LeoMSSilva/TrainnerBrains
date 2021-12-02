import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: auto;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #0c4b93;
`;

export const Button = styled.TouchableOpacity`
  width: 25%;
  margin: 5px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border: 2px solid #0c4b93;
  background-color: ${({active}) => (active ? '#0c4b93' : '#edf5f7')};
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${({active}) => (active ? '#edf5f7' : '#0c4b93')};
`;
