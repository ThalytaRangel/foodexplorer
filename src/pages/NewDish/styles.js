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
  max-width: 112rem;
`

export const Form = styled.form`
  width: 100%;
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

      #image-input {
        width: 23rem;
        display: flex;
      }

      #categoria {
        width: 36rem;
        height: 4.8rem;
        padding: 1.6rem;
        border: none;
        border-radius: 0.5rem;
        background-color: ${({theme}) => theme.COLORS.DARK_800};

        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }

      #price {
        width: 25rem;
      }
    }
  }
`

export const Ingredients = styled.div`
  width: 95rem;
  height: 4.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.6rem;

  background-color: ${({theme}) => theme.COLORS.DARK_800};  
`

