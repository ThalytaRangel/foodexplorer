import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; 
 
  
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`

export const Content = styled.div`
  grid-area: content;
  margin: auto;
  width: 100%;
  height: 100%;

  .back {
    margin-left: 19rem;
    margin-top: 4rem;
  }
`

export const Form = styled.form`
  width: 112rem;
  margin: 0 auto 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h2 {
    align-self: start;
    margin-bottom: 3.2rem;
    margin-top: 2.4rem;

    font-size: 3.2rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_300}
  }

  > .infos {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;    
    gap: 3.2rem;
    margin-bottom: 3.2rem;

    #label {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1.6rem;

      h3 {
        font-family: ${({theme}) => theme.FONTS.Secondary};
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_400};        
      }
    }

    .input-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      
      > label {
          font-family: ${({theme}) => theme.FONTS.Secondary};
          color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

      > Input {
        background-color: ${({theme}) => theme.COLORS.DARK_800};
      }     
           
      #categoria {
        width: 24rem;
        height: 4.8rem;
        padding: 1.6rem;
        border: none;
        border-radius: 0.5rem;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }
      
      #price {
        width: 24rem;
      }      
    }
  }

  .textarea-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      gap: 1.6rem;
      
      > label {
          font-family: ${({theme}) => theme.FONTS.Secondary};
          color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

    #description {
      width: 100%;
      height: 15rem;
      padding: 1.4rem;

      display: block;
      align-self: stretch;
      resize: none;
  
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      border: none;
      border-radius: 0.8rem;

      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${({theme}) => theme.FONTS.Secondary};

      color: ${({theme}) => theme.COLORS.LIGHT_100} ;

      &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
      }

    }
  }

  .btn-save {
    width: 17rem;
    height: 4.8rem;
    padding: 1.2rem 2rem;
    margin-top: 3.2rem;

    display: flex;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
    

    border-radius: 0.5rem;
    border: none;

    background-color: ${({theme}) => theme.COLORS.TOMATO_400};

    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
  }
`

export const InputFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  

  :first-child {
    font-family: ${({theme}) => theme.FONTS.Secondary};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  :nth-child(2) {
    width: 24rem;
    height: 4.8rem;
    padding: 1.2rem 3.2rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.DARK_800};

    color: ${({theme}) => theme.COLORS.LIGHT_100} ;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 0.8rem;      
    }

    #image {
      display: none;
    }
  }
  
  
` 

export const Ingredients = styled.div`
  width: 85rem;
  height: 4.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.6rem;

  background-color: ${({theme}) => theme.COLORS.DARK_800};  
`

