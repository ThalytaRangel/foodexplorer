import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;
  padding: 2.4rem 12rem;
    
  
  grid-area: header;
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;

    div { 
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-items: center; 

        #icon {
         width: 3rem;
         height: 3rem;

         fill: ${({theme}) => theme.COLORS.CAKE_100};   
        }

        h1 {
         width: max-content ;
         color: ${({theme}) => theme.COLORS.LIGHT_100};
         font-size: 2.4rem;
         font-family: ${({theme}) => theme.FONTS.Secondary};
         font-weight: 700;
        }
    }
  }
`;

export const Input = styled.input`
  width: 58rem;
  height: 4.8rem;
  padding: 1.2rem 1.4rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.COLORS.DARK_900};

  color: ${({theme}) => theme.COLORS.LIGHT_100};
   
  &::placeholder {    
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    outline: solid 1px ${({theme}) => theme.COLORS.LIGHT_500};
  }


`;

export const LogOutBtn = styled.button`
 border: none;
 background: none;
 
 cursor: pointer;

 > svg {
  font-size: 3.2rem;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`;
