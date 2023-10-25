import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { EditDish } from "./pages/EditDish";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <EditDish />
    </ThemeProvider>
  );
}

export default App;
