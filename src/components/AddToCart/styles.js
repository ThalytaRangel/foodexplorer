import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints"

export const Container = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  > button {
    width: 2.7rem;
    height: 2.7rem;
    background: none;
    border: none;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.7rem;
  }

  > span {
    font-size: 2.2rem;
    font-family: ${({theme}) => theme.FONTS.Secondary};
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT_300} ;
  } 

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 9rem;

    > button {
    width: 2.4rem;
    height: 2.4rem;

    font-size: 2.4rem;
    }

    > span {
    font-size: 2.2rem;
   }
  }

`;