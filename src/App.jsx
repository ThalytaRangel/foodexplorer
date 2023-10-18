import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { DishDetails } from "./pages/DishDetails";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DishDetails />
    </ThemeProvider>
  );
}

export default App;
