import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 4px 8px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin: 0px 0px 20px;
`;
