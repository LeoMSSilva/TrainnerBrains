import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #edf5f7;
  padding: 0 30px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TextLogoLight = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #2283d8;
`;

export const TextLogoDark = styled.Text`
  margin-left: 2px;
  font-size: 32px;
  font-weight: 900;
  color: #1a4384;
`;

export const ImageContainer = styled.ImageBackground``;

export const Next = styled.TouchableOpacity`
  justify-items: center;
  align-items: center;
  height: 66px;
  width: 66px;
  border-radius: 20px;
  background-color: #003873;
`;

export const TextNext = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #edf5f7;
  line-height: 66px;
`;
