import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30rem;  
`;

export const Form = styled.form`
 display: flex; 
 flex-direction: column;
 gap: 3.2rem;

 width: 45rem;
 padding: 6.4rem;
 border-radius: 1.6rem;

 background-color: ${({theme}) => theme.COLORS.DARK_700};

  > h2 {
    font-size: 3.2rem;
    text-align: center;
    font-weight: 500;
  }

  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    >label {
      font-family: ${({theme}) => theme.FONTS.Secondary};
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.LIGHT_400 };
    }
  }

  #btn-signIn {
    width: 100%;
  }

  > a  {
    color: ${({theme}) => theme.COLORS.LIGHT_100 };
    text-align: center;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;