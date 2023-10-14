import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  
  display: grid;
  grid-template-rows: 104px auto;
  grid-template-areas: 
  "header"
  "content";
  
`;

export const Content = styled.div`
  grid-area: "content";
`;