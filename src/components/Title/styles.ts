import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
