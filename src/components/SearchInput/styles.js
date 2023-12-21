import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  width: 58rem;
  padding: 1.4rem 1.6rem;
  height: 4.8rem;

  display: flex;  
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;
  
  > input {
  width: 100%;
  padding: 1.2rem 1.4rem;
  align-self: center;
   
  outline: none;
  border: none;
  background: none;
  
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  &:placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT_500};    
  }  
  }
  
  svg {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    margin-right: 1.4rem;
  }

   @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 100%;
  } 
`;