import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  padding: 2.4rem 12rem;
    
  
  grid-area: footer;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;    
    

    height: 3rem;
  
   div { 
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-items: center; 
    
    #icon {
     width: 3rem;
     height: 3rem;

     fill: ${({theme}) => theme.COLORS.LIGHT_700};    
     }
   }
    
    h1 {
     color: ${({theme}) => theme.COLORS.LIGHT_700};
     font-size: 2.4rem;
     font-family: ${({theme}) => theme.FONTS.Secondary};
     font-weight: 700;
    }

    p {
     font-size: 1.4rem;
     font-family: ${({theme}) => theme.FONTS.Secondary};
     font-weight: 400;
     color: ${({theme}) => theme.COLORS.LIGHY_200};
    }

  }

 
`;