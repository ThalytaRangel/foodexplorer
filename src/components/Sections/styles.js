import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints"; 

export const Container = styled.div`
  width: 55rem;
  margin-top: 4.8rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 2.3rem;

  > h2 {
    width: 100%;    
    font-size: 1.8rem;
    font-weight: 500;
    

    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
  }
  
  > .carrossel {
    width: 100%;
    padding: 1rem;
    display: flex;    
    gap: 2.7rem;

  
    .swiper-button-prev, .swiper-button-next {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};      
    }

    .swiper-button-prev {
      display: flex;
      position: absolute;        
      left: 0;
    }
    .swiper-button-next {
      display: flex;
      position: absolute;       
      right: 0;
    }
  }
  .carrossel:last-child {
    margin-bottom: 4.6rem
  }
  
  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 70rem;

    > h2 {
    width: 100%;    
    font-size: 2.4rem;
    }
   }
  

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 108rem;

    > h2 {
    width: 100%;    
    font-size: 3.2rem;
    }
   }
  
  
`