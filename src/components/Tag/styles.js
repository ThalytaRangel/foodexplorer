import styled from "styled-components";

export const Container = styled.span`
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.DARK};

  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
`;