import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints";

export const Container = styled.header`
  width: 100%;
  height: 104px;
  padding: 3.4rem 8rem 2.4rem;   
  
  
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

    .mobile-button {
      background: none;
      border: none;
      width: fit-content;
      height: 3.2rem;

      > svg {
      width: 3.2rem;
      height: 3.2rem;

      fill: white;
      }

      #quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 2rem;
        height: 2rem;
        padding: .8rem;
        border-radius: 50%;
        
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.FONTS.Primary};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        

        position: relative;
        top: -4.3rem;
        right: -1.8rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    #logo {
      #icon {
        width: 2.4rem;
        height: 2.4rem;
      }
      h1 {
        font-size: 2.1rem;
      }
    }
  }
  }
`

export const LogOutBtn = styled.button`
 border: none;
 background: none;
 
 cursor: pointer;

 > svg {
  font-size: 3.2rem;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none;
   }
`;

export const Menu = styled.button`
 background: none;
 border: none;

 display: none;

 > svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100}; 
   }

   @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: block;
   }
`;