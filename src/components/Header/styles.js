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

