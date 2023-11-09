import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 4.8rem;
 padding: 1.2rem 1.4rem;
 justify-content: center;
 align-items: center;

 border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
 border-radius: 0.5rem;
 
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

  

 }
`;