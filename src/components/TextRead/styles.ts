import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 64px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline ${({ theme }) => theme.colors.primary};
`;
