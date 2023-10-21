import styled from "styled-components";

export const Container = styled.span`

  display: flex;
  flex-direction: row;

  > button {
    background: none;
    border: none;
    width: 0.8rem;
    height: 0.8rem;
    
    svg {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
    
   > input {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
   }
  } 

`;