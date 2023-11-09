import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoints";

export const Container = styled.div`   
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

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    margin-top: 15rem;
    gap: 1rem;
    max-width: 31rem;
    
    h1 {
      font-size: 3.7rem;
    }
    #logoIcon {
    width: 4.3rem;
    height: 4.3rem;
  }
  }
`;