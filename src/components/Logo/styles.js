import styled from "styled-components";

export const Container = styled.div`
  height: 4.8rem;
  
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  justify-items: center;

  #logoIcon {
    width: 5rem;
    height: 5rem;

    fill: ${({theme}) => theme.COLORS.CAKE_100};    
  }

  h1 {
    width: 30rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 4.2rem;
    font-family: ${({theme}) => theme.FONTS.Secondary};
    font-weight: 700;
  }
`;