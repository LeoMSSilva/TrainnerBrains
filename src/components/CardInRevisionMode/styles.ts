import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ hit: boolean }>`
  width: 80%;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ hit, theme }) =>
    hit ? theme.colors.success : theme.colors.error};
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
`;
