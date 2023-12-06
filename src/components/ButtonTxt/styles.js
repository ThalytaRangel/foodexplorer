import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  

  background: none;
  border: none;

  color: ${({theme}) => theme.COLORS.LIGHT_300};

  font-size: 2.4rem;
  font-weight: 500;
  font-family: ${({theme}) => theme.FONTS.Primary};

  > svg {
    font-size: 3.2rem;
  }

`;