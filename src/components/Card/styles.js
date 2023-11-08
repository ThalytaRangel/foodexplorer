import styled from "styled-components"; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  align-items: center;
  justify-content: center;

  width: 30rem;
  height: 100%;
  padding: 2.4rem;

  .cardBtn {
    background: none;
    border: none;
    position: relative ;

    > svg {
      width: 3.4rem;
      height: 3.2rem;

      position: absolute;
      left: 8.8rem;
      top: -2.4rem;
      
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }


  .dishImg {
    width: 17rem;
    height: 17rem;
  }

  .dishTitle {
    white-space: nowrap;
    font-weight: 700;
    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  .dishDescription {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: ${({theme}) => theme.FONTS.Secondary};

    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  .price {
    font-size: 3.2rem;
    font-weight: 400;
    font-family: ${({theme}) => theme.FONTS.Secondary};
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  .quantityItems {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem; 
    width: 100%;

    button {
      width: 9.2rem;


    }
  }

`