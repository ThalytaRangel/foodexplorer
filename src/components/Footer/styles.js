import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  padding: 2.4rem 4rem;
  align-items: center;
  justify-content: center;
  
  grid-area: footer;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;    
    gap: 8rem;
    width: 100%;
    height: 3rem;
  
   div { 
    display: flex;  
    width: 100% ;
    gap: 0.8rem;
    align-items: center;
    justify-items: center; 
    
    #icon {
     width: 2.2rem;
     height: 2.2rem;

     fill: ${({theme}) => theme.COLORS.LIGHT_700};    
     }
   }
    
    h1 {
     color: ${({theme}) => theme.COLORS.LIGHT_700};
     font-size: 1.5rem;
     font-family: ${({theme}) => theme.FONTS.Secondary};
     font-weight: 700;
    }

    p {
     font-size: 1.2rem;
     width: 100%;
     font-family: ${({theme}) => theme.FONTS.Secondary};
     font-weight: 400;
     color: ${({theme}) => theme.COLORS.LIGHY_200};
     text-align: end;
    }

  }  

    @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
      padding: 2.4rem 8rem;

     .logo { 
      gap: 1rem; 
      
      #icon {
      width: 3rem;
      height: 3rem;
      }

      h1 {
      font-size: 2.4rem;
      }
    }
    > footer p {
      font-size: 1.4rem;
     }
    }

    @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      padding: 2.4rem 2rem;

      > footer {
        gap: 3rem;
      }
    }

 
`