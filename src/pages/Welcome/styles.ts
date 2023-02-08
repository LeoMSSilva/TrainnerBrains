import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 28px 16px 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Row = styled.View`
  width: 96%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const TextLogoLight = styled.Text`
  font-size: 48px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.logoLight};
`;

export const TextLogoDark = styled.Text`
  font-size: 48px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.logoDark};
`;

export const ImageContainer = styled.ImageBackground``;

export const TextMessage = styled.Text`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Next = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bgNextButton};
`;
