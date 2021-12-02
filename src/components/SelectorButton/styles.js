import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  width: 90%;
  height: 60px;
  padding: 5px 10px;
  margin-bottom: 15px;
  border-radius: 25px;
`;

export const Text = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: #edf5f7;
  font-size: 17px;
`;
