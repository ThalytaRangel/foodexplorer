import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints";

export const Container = styled.header`
  @keyframes appear {
    from {
      opacity: 0;
    }
  }
  width: 100%;
  height: 104px;
  padding: 3.4rem 8rem 2.4rem;   
  
  
  grid-area: header;
  background-color: ${({theme}) => theme.COLORS.DARK_600};
  
  animation: appear ease-in 1.8s;
  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;

    .favorites {
      font-size: 1.8rem;
      font-family: ${({theme}) => theme.FONTS.Secondary};
    }    
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
  padding: 3.4rem 3rem 2.4rem;;
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

