import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-items: center;

  #logoIcon {
    width: 3rem;
    height: 3rem;

    fill: ${({theme}) => theme.COLORS.CAKE_100};    
  }

  h1 {
    width: 15rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;
    font-family: ${({theme}) => theme.FONTS.Secondary};
    font-weight: 700;
  }
`;