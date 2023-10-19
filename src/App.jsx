import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { SignUp } from "./pages/SignUp";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
