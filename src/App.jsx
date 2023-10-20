import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { NewDish } from "./pages/NewDish";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NewDish />
    </ThemeProvider>
  );
}

export default App;
