import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  height: 26rem;
  margin: 16rem auto 0;
  border-radius: 0.8rem;
  border: none;
  

  display: flex; 
  align-items: center;
  
  
  background: ${({theme}) => theme.GRADIENTS.BACKGROUND_200};

  > img {
    width: 63rem;
    height: 40rem;
    position: relative;
    top: -7rem;
    left: -5rem;
  }
  > .text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    

    h2 {
      font-size: 4rem;
      font-weight: 500;

      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${({theme}) => theme.FONTS.Secondary};
      
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
  }


`;