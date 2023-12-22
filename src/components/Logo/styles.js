import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoints";

export const Container = styled.div`   
  .logo {   
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    justify-items: center;
    
    .icon {
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

  }
  
  .logo-header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    #brand {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-items: center;      
      
      .icon {
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
    
      p {
        font-size: 1.2rem;
        color: ${({theme}) => theme.COLORS.CAKE_200};
        font-family: ${({theme}) => theme.FONTS.Secondary};   
        justify-self: flex-end;
      }      
  } 

@media (max-width: ${DEVICE_BREAKPOINT.LG}) {
  .logo {        
    margin-top: 15rem;
    gap: 1rem;
    max-width: 31rem;

    h1 {
      font-size: 3.7rem;
    }
    .icon {
      width: 4.3rem;
      height: 4.3rem;
    }
  }

  .logo-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          
          
        #brand {
        
        .icon {
          width: 2.4rem;
          height: 2.4rem;
        }
        h1 {
          font-size: 2.1rem;
        }
        
        p {
          align-self: center;
          justify-self: center;
        }
      }
    }
}
`;