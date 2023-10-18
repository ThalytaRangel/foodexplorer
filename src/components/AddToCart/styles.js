import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  width: 9rem;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  > button {
    width: 2.4rem;
    height: 2.4rem;
    background: none;
    border: none;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;
  }

  > span {
    font-size: 2rem;
    font-family: ${({theme}) => theme.FONTS.Secondary};
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT_300} ;
  } 

`;