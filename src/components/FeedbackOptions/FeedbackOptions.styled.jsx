import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  color: ${p => p.theme.colors.accent};
  border-radius: 8px;
  text-transform: capitalize;
  margin-right: 10px;
`;
