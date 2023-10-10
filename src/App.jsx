import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Food Explorer</h1>
    </ThemeProvider>
  );
}

export default App;
