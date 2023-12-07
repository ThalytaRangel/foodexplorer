import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 12rem;
  padding-right: 3rem;
  border-radius: 0.8rem;
  border: none;  

  display: flex; 
  align-items: center;
  justify-content: center;
  
  
  background: ${({theme}) => theme.GRADIENTS.BACKGROUND_200};

  > img {
    width: 20rem;
    height: 15rem;
    position: relative;
    top: -1.5rem;
    left: -2rem;
  }
  > .text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    width: 100%;
    

    h2 {
      width: 100%;
      white-space: nowrap;
      font-size: 1.6rem;
      font-weight: 600;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: ${({theme}) => theme.FONTS.Primary};
      
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.SM}) {
    width: 100%;
    max-width: 80rem;
    height: 20rem ;
    margin: 10rem auto 0;

    > img {
      width: 30rem;
      height:25rem;

      top: -2.8rem;
      left: -6rem;
    }

    .text {
    h2 {
      font-size: 2.2rem;
      margin-right: 2rem;
    }
    p {
      font-size: 1.8rem;
      margin-right: 2rem;
    }
   }
   }  

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 100%;
    max-width: 112rem;
    height: 26rem;
    margin: 16rem auto 0;
    padding-right: 8rem;

    > img {
    width: 60rem;
    height: 40rem;

    top: -7rem;
    left: -6rem;
   }
   
   .text {
    h2 {
      font-size: 4rem;
      margin-right: 2rem;
    }
    p {
      font-size: 1.6rem;
      margin-right: 2rem;
    }
   }
  }
`