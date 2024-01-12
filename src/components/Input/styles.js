import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
 width: 100%;
 height: 4.8rem;
 padding: 1.2rem 1.4rem;
 justify-content: center;
 align-items: center;

 border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
 border-radius: 0.5rem;
 background-color: ${({theme}) => theme.COLORS.DARK_800};
 
 > input {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  align-items: start;

  color: ${({theme}) => theme.COLORS.LIGHT_100};

  &::placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    font-family: ${({theme}) => theme.FONTS.Secondary};
    font-size: 1.6rem;
    font-weight: 400;
  }  

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {    
    &::placeholder {
      font-size: 1rem;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {    
    &::placeholder {
      font-size: 1.3rem;
    }
  }   
}

@media (max-width: ${DEVICE_BREAKPOINT.MD}) {    
  padding: 1rem 1.2rem;
  width: fit-content;
}

@media (max-width: ${DEVICE_BREAKPOINT.LG}) {    
    padding: 1rem 1.2rem;
  } 


input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
`;
