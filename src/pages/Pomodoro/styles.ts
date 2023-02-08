import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 56px 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Row = styled.View`
  width: 96%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`;

export const Col = styled.View`
  width: 100%;
  height: 64%;
  justify-content: flex-end;
  align-items: center;
  gap: 88px;
`;

export const Status = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
