import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
