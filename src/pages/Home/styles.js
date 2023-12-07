import styled from "styled-components";
import { DEVICE_BREAKPOINT} from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh; 
 
  
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`

export const Content = styled.div`  
  grid-area: content;
  height: 100%;
  width: 100%;
  padding: 1.5rem 2.4rem 2.4rem; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    max-width: 112rem;
    padding: 3.2rem 5.6rem;
  }
`
